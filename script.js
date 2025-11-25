
document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule');
  const searchInput = document.getElementById('search');
  let talks = [];

  const renderTalks = (filteredTalks) => {
    scheduleContainer.innerHTML = '';
    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0);

    filteredTalks.forEach((talk, index) => {
      const startTime = new Date(currentTime);
      const endTime = new Date(startTime.getTime() + talk.duration * 60000);

      const talkElement = document.createElement('div');
      talkElement.classList.add('talk');

      const timeString = `${startTime.toTimeString().slice(0, 5)} - ${endTime.toTimeString().slice(0, 5)}`;
      const speakersString = talk.speakers.join(', ');
      const categoryString = talk.category.map(cat => `<span>${cat}</span>`).join(' ');

      talkElement.innerHTML = `
        <div class="talk-time">${timeString}</div>
        <div class="talk-title">${talk.title}</div>
        <div class="talk-speakers">${speakersString}</div>
        <div class="talk-category">${categoryString}</div>
        <div class="talk-description">${talk.description}</div>
      `;
      scheduleContainer.appendChild(talkElement);

      currentTime = new Date(endTime.getTime() + 10 * 60000); // 10-minute break

      if (index === 2) { // Lunch break after the 3rd talk
        const lunchStartTime = new Date(currentTime);
        const lunchEndTime = new Date(lunchStartTime.getTime() + 60 * 60000);
        const lunchElement = document.createElement('div');
        lunchElement.classList.add('break');
        lunchElement.textContent = `Lunch Break (${lunchStartTime.toTimeString().slice(0, 5)} - ${lunchEndTime.toTimeString().slice(0, 5)})`;
        scheduleContainer.appendChild(lunchElement);
        currentTime = lunchEndTime;
      }
    });
  };

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderTalks(talks);
    });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talks.filter(talk => {
      return talk.category.some(cat => cat.toLowerCase().includes(searchTerm));
    });
    renderTalks(filteredTalks);
  });
});
