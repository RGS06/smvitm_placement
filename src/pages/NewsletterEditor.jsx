import { useState, useEffect } from 'react';
import pb from '../utils/pbClient'; // make sure this exports a PocketBase instance
import './Admin.css';

const NewsletterEditor = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [currentNewsletter, setCurrentNewsletter] = useState({
    title: '',
    link: '',
    date: new Date().toLocaleDateString('en-GB')
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const data = await pb.collection('announcements').getFullList(200, {
        sort: '-created' // newest first
      });
      setNewsletters(data);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNewsletter({ ...currentNewsletter, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing && editId) {
        // Update
        const updated = await pb.collection('announcements').update(editId, currentNewsletter);
        setNewsletters((prev) =>
          prev.map((item) => (item.id === editId ? updated : item))
        );
      } else {
        // Create
        const created = await pb.collection('announcements').create(currentNewsletter);
        setNewsletters([created, ...newsletters]);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving newsletter:', error);
      alert('Failed to save changes');
    }
  };

  const editNewsletter = (newsletter) => {
    setCurrentNewsletter({
      title: newsletter.title,
      link: newsletter.link,
      date: newsletter.date
    });
    setEditId(newsletter.id);
    setIsEditing(true);
  };

  const deleteNewsletter = async (id) => {
    if (window.confirm('Are you sure you want to delete this newsletter?')) {
      try {
        await pb.collection('announcements').delete(id);
        setNewsletters(newsletters.filter((item) => item.id !== id));
      } catch (error) {
        console.error('Error deleting:', error);
        alert('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setCurrentNewsletter({
      title: '',
      link: '',
      date: new Date().toLocaleDateString('en-GB')
    });
    setIsEditing(false);
    setEditId(null);
  };

  if (isLoading) return <div className="loading">Loading newsletters...</div>;

  return (
    <div className="newsletter-editor">
      <div className="editor-form">
        <h2>{isEditing ? 'Edit Newsletter' : 'Add New Newsletter'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={currentNewsletter.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Link</label>
            <input
              type="text"
              name="link"
              value={currentNewsletter.link}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={currentNewsletter.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Update' : 'Save'}
            </button>
            <button type="button" onClick={resetForm} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="newsletter-list">
        <h2>Existing Newsletters</h2>
        {newsletters.length === 0 ? (
          <p>No newsletters found</p>
        ) : (
          <ul>
            {newsletters.map((newsletter) => (
              <li key={newsletter.id} className="newsletter-item">
                <div className="newsletter-content">
                  <h3>{newsletter.title}</h3>
                  <p>{newsletter.link}</p>
                  <small>{newsletter.date}</small>
                </div>
                <div className="newsletter-actions">
                  <button
                    onClick={() => editNewsletter(newsletter)}
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteNewsletter(newsletter.id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsletterEditor;
