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
          title: 'EDS et Culte',
          daysOfWeek: '6',
          startTime: '09:45:00',
          endTime: '12:30:00',
          backgroundColor: '#153e52',
          borderColor: '#153e52',
          textColor: '#fff',
        },
      ],
      

    });
    calendar.render();
  });


      