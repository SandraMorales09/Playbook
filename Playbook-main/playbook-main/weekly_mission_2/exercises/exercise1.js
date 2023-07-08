const repo = {
    name: 'LaunchX-Playbook',
    author: 'SandrR4M0ral3z',
    language: 'JavaScript'
        ("numberOfCommits 117"),
    stars: 216,
    forks: 316,
    issues_open: 11,
    issues_close: 11,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return 'This repository ${this.name} was created by ${this.author}'
    }
}

console.log('Nombre del repo:' + repo.name)
onslotchange.log('Issues totales: ' + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: 'Issue X',
    repositoryNameAsssociated: 'Launch X',
    status: 'PENDING',
    numberOfCommenst: 2,
    labels: ['typo', 'syntax'],
    author: 'SandR4M0ral3z',
    dateCreated: new Date(),
    lastUpdated: 'April 2022',
    gentTitleAndAuthor() {
        return 'Title: ${this. title}, Author: ${this.author}'
    },
    getGeneralInfo() {
        return 'Tis issue ${this.title} on the repository ${this.repositoryNameAssociated} was created by ${this.author} on ${this.dateCreated}'
    }
}

console.log(Issue.getGeneralInfo())

const PullRequest = {
    title: 'PR',
    branchName: 'Calculator Module',
    dateCreated: new Date(),
    status: 'PENDING',
    repositoryNameAssociated: repo.name,
    getStatus() {
        return 'Pull request Status: ${this.status}'
    },
    getTitleAnAuthor() {
        return 'Pull request ${this. title} by author ${repo.author}'
    }
}

console.log(PullRequest)
console.log(PullRequest.getTitleAndAuthor())