import { useState, useEffect } from 'react';
import './Admin.css';

const NewsletterEditor = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [currentNewsletter, setCurrentNewsletter] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch('/NewsLetter/newsletter.json');
      if (!response.ok) throw new Error('Failed to fetch newsletters');
      const data = await response.json();
      setNewsletters(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNewsletter({
      ...currentNewsletter,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let updatedNewsletters;
      if (isEditing) {
        updatedNewsletters = newsletters.map(item => 
          item.id === currentNewsletter.id ? currentNewsletter : item
        );
      } else {
        const newId = Math.max(...newsletters.map(item => item.id), 0) + 1;
        updatedNewsletters = [...newsletters, { ...currentNewsletter, id: newId }];
      }

      // In a real app, you would send this to your backend API
      // For this demo, we'll just update the state
      setNewsletters(updatedNewsletters);
      resetForm();
      
      alert('Changes saved successfully! (In a real app, this would update the JSON file)');
    } catch (error) {
      console.error('Error saving newsletter:', error);
      alert('Failed to save changes');
    }
  };

  const editNewsletter = (newsletter) => {
    setCurrentNewsletter({ ...newsletter });
    setIsEditing(true);
  };

  const deleteNewsletter = (id) => {
    if (window.confirm('Are you sure you want to delete this newsletter?')) {
      const updatedNewsletters = newsletters.filter(item => item.id !== id);
      setNewsletters(updatedNewsletters);
      // In a real app, you would also update the JSON file here
    }
  };

  const resetForm = () => {
    setCurrentNewsletter({
      id: '',
      title: '',
      content: '',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    });
    setIsEditing(false);
  };

  if (isLoading) {
    return <div className="loading">Loading newsletters...</div>;
  }

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
              value={currentNewsletter?.title || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={currentNewsletter?.content || ''}
              onChange={handleInputChange}
              required
              rows="5"
            />
          </div>
          
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={currentNewsletter?.date || ''}
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
            {newsletters.map(newsletter => (
              <li key={newsletter.id} className="newsletter-item">
                <div className="newsletter-content">
                  <h3>{newsletter.title}</h3>
                  <p>{newsletter.content.substring(0, 100)}...</p>
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