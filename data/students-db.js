const students = [
    {student: 'Alex', done: true},
    {student: 'Mark', done: true},
    {student: 'Kam', done: true}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  }