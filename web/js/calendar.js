document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          buttonText: {
            today: 'Aujourd\'hui',
            month: 'mois',
            week: 'semaine',
            day: 'jour'
          },
      
      locale: 'fr',
      events: [
        {
          title: 'Etude de la bible',
          daysOfWeek: '6',
          startTime: '09:45:00',
          endTime: '10:50:00',
          backgroundColor: '#153e52',
          borderColor: '#153e52',
          textColor: '#fff',
        },
        {
          title: 'Culte',
          daysOfWeek: '6',
          startTime: '11:15:00',
          endTime: '12:30:00',
          backgroundColor: '#14bf98',
          borderColor: '#14bf98',
          textColor: '#fff',
        },
        {
          title: 'Réunion de prière',
          daysOfWeek: '2',
          startTime: '19:00:00',
          endTime: '20:00:00',
          backgroundColor: '#75751c',
          borderColor: '#75751c',
          textColor: '#fff',
          description: "Sur Zoom"
        },
      
      ],
      

    });
    calendar.render();
  });



      