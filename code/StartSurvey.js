var dates = require('dates');
var console = require('console');

module.exports.function = function startSurvey(name, email, started, duration, like, feedback) {

  var whenStart = dates.ZonedDateTime.of(
    duration.start.year,
    duration.start.month,
    duration.start.day);
  var whenEnd = dates.ZonedDateTime.of(
    duration.end.year,
    duration.end.month,
    duration.end.day);

  var start = whenStart.toIsoString();
  var end = whenEnd.toIsoString();

  console.log(start);
  console.log(end);

  return {
    name: name,
    email: email,
    started: started,
    duration: duration,
    like: like,
    feedback: feedback
  }
}
