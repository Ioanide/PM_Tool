//document.getElementById('issueInputForm').addEventListener('submit', saveIssue());

var firstID=1;

function Issue(id, name, type, sprint, createdBy, assignedTo, description, status, tasks, comments, updatedAt, createdAt) {
      this.id = firstID++;
      this.name = name;
      this.sprint = sprint;
      this.createdBy = createdBy;
      this.assignedTo = assignedTo;
      this.description = description;
      this.status = status;
      this.tasks= tasks;
      this.comments = comments;
      this.updatedAt = updatedAt;
      this.createdAt = createdAt;
      this.type = type;
  }

  function Issue(name, type, description, status, assignedTo){
    this.id = firstID++;
    this.name = name;
    this.description = description;
    this.type = type;
    this.assignedTo = assignedTo;
    this.status = status;
  }

  function getID() {
      return this.id;
  }

  function getName(){
    return this.name;
  }
  function getStatus(){
    return this.status;
  }
  function getDescription(){
    return this.description;
  }
  function getType(){
    return this.type;
  }
  function getAssignedTo(){
    return this.assignedTo;
  }

const status = ["New", "In progress", "Feedback", "Rework", "Resolved", "Ready for Testing"]

function saveIssue() {
  let issueDesc = document.getElementById('issueDescInput').value;
  let issueType = document.getElementById('issueTypeInput').value;
  let issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  //let issueId = chance.guid();
  let issueStatus = 'Open';
  let issueName = document.getElementById('issueNameInput').value;

  var issue = new Issue(issueName, issueType, issueDesc, issueStatus, issueAssignedTo);


  console.log(issue);

  if (sessionStorage.getItem('issues') == null) {
    let issues = [];
    issues.push(issue);
    sessionStorage.setItem('issues', JSON.stringify(issues));
  } else {
    let issues = JSON.parse(sessionStorage.getItem('issues'));
    issues.push(issue);
    sessionStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

}

function setStatusClosed(id) {
  let issues = JSON.parse(sessionStorage.getItem('issues'));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Closed';
    }
  }

  sessionStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

function deleteIssue(id) {
  let issues = JSON.parse(sessionStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  sessionStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}
// This function will be used to fetch the list of issues

function fetchIssues() {
  let issues = JSON.parse(sessionStorage.getItem('issues'));
  let issuesList = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    let id = issues[i].id;
    let desc = issues[i].description;
    let type = issues[i].type;
    let assignedTo = issues[i].assignedTo;
    let status = issues[i].status;

    issuesList.innerHTML +=   '<div class="well">'+
                              '<h6>Issue ID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + desc + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + type + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}