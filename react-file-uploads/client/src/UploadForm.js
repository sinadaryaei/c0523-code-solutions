import React, { useState } from 'react';

export default function UploadForm() {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    }
  };

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
            {imageUrl && (
              <div className="mt-3">
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
