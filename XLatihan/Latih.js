const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');
    
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if one week has passed and reset progress if necessary
    checkWeekReset();
  
    // Load the saved progress from localStorage
    loadProgress();
  });
  
  const days = ['monday', 'tuesday', 'wednesday', 'kamis','jumat']; // Add other days as needed
  
  // Function to mark a day as done and save it to localStorage
  function markDay(day) {
    // Save the current date when the user first marks a day as done
    if (!localStorage.getItem('startDate')) {
      const today = new Date().getTime();  // Store the current timestamp
      localStorage.setItem('startDate', today);
    }
  
    localStorage.setItem(day, 'done');
    document.getElementById(`${day}-status`).textContent = '✓ Done';
    document.getElementById(`${day}-status`).classList.add('done');
  }
  
  // Function to load saved progress from localStorage
  function loadProgress() {
    days.forEach(day => {
      const status = localStorage.getItem(day);
      if (status === 'done') {
        document.getElementById(`${day}-status`).textContent = '✓ Done';
        document.getElementById(`${day}-status`).classList.add('done');
      }
    });
  }
  
  // Function to check if a week has passed and reset the progress
  function checkWeekReset() {
    const startDate = localStorage.getItem('startDate');
    if (startDate) {
      const now = new Date().getTime();
      const oneWeek = 7;  // One week in milliseconds
  
      // If one week has passed since the user started the schedule
      if (now - startDate > oneWeek) {
        resetProgress();
      }
    }
  }
  
  // Function to reset the progress and clear localStorage
  function resetProgress() {
    days.forEach(day => {
      localStorage.removeItem(day);
    });
    localStorage.removeItem('startDate');  // Clear the start date
    location.reload();  // Reload the page to refresh the UI
  }
  