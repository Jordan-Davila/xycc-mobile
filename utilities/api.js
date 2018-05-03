var api = {
     getCourses() {
          var url = "http://jordandavila.com/xycc/api/courses/000305";
          return fetch(url).then(res => res.json());
     },
     getAssignments() {
          var url = "http://jordandavila.com/xycc/api/assignments/000305";
          return fetch(url).then(res => res.json());
     }
};

module.exports = api;
