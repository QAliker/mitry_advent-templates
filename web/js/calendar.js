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
          title: 'EDS',
          daysOfWeek: '6',
          startTime: '09:45:00',
          endTime: '10:50:00',
          backgroundColor: '#153e52',
          borderColor: '#153e52',
          textColor: '#fff',
          description: 'Ecole du sabbat à 9h45' 
        },
        {
          title: 'Culte',
          daysOfWeek: '6',
          startTime: '11:15:00',
          endTime: '12:30:00',
          backgroundColor: '#14bf98',
          borderColor: '#14bf98',
          textColor: '#fff',
          description: 'Samedi à 11h15'
        },
        {
          title: 'Prière',
          daysOfWeek: '2',
          startTime: '19:00:00',
          endTime: '20:00:00',
          backgroundColor: '#75751c',
          borderColor: '#75751c',
          textColor: '#fff',
          description:'Réunion de Prière en distanciel'
        }
      ],
      eventClick: function(info) {
        $('#eventModal').modal('show'); // show the modal
        $('#eventModalTitle').text(info.event.title); // set the title of the modal
        $('#eventModalBody').html(info.event.extendedProps.description); // set the body of the modal
    }
});
calendar.render();
});
      