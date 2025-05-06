document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
    return;
  }
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Handle logout
  document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
  });
  
  // Load photos from the sample data
  const photoGallery = document.getElementById('photo-gallery');
  
  // Sample photo data for the gallery
  const samplePhotos = [
    {
      id: 1,
      title: "City Lights",
      date: "March 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Mountain Peace",
      date: "January 23, 2023",
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Summer Getaway",
      date: "July 5, 2023",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Forest Tranquility",
      date: "April 12, 2023",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 5,
      title: "Modern Design",
      date: "February 8, 2023",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 6,
      title: "Flower Detail",
      date: "May 20, 2023",
      imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 7,
      title: "Journey Ahead",
      date: "June 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 8,
      title: "Morning Coffee",
      date: "August 3, 2023",
      imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  // Display sample photos after a short delay to show loading state
  setTimeout(function() {
    // Clear loading indicator
    photoGallery.innerHTML = '';
    
    // Check if we have photos
    if (samplePhotos.length === 0) {
      photoGallery.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-gray-500 mb-4">No photos found in your gallery.</p>
        </div>
      `;
      return;
    }
    
    // Create gallery items for each photo
    samplePhotos.forEach(function(photo) {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <img src="${photo.imageUrl}" alt="${photo.title}" class="gallery-item-image">
        <div class="gallery-item-info">
          <h3>${photo.title}</h3>
          <p>${photo.date}</p>
        </div>
      `;
      
      photoGallery.appendChild(galleryItem);
    });
  }, 1500); // 1.5 second delay to show loading animation
});
