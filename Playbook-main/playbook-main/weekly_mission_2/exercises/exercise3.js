class Repo {
    constructor(name, author, language) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = 0
        this.stars = 0
        this.forks = 0
        this.issues_open = 0
        this.issues_close = 0
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close
    }
    getGeneralInfo() {
        return 'This repository ${this.name} was created by ${this.author}'
    }
}

const Repol = new Repo('Prueba Repo', 'SandR4M0ral3z', 'js')
console.log(Repol)
console.log(Repol.getGeneralInfo())

class Issues {
    constructor(title, repositoryNameAssociated, numberOfComments, labels, author, ) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = 'PENDING'
        this.numberOfComments = numbersOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    getTitleAndAuthor() {
        return 'Title: ${this.title} on the repositoryNameAssociated} was created by ${this.author} on ${this.dateCreated}'
    }
    getGeneralInfo() {
        return 'This issue ${this.title} on the repository ${this.rpositoryNameAssociated} was created by ${this.author} on ${this.dateCreated}'
    }
}

const Issuel = new Issues('Falta de coma', 'Launch X', 1, ['syntax', 'bug'], 'SandR4M0ral3z')
console.log(Issuel)
console.log(Issuel.getGeneralInfo())

class PullRequest {
    constructor(title, branchName, repositoryNameAssociatiated) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = new Date()
        this.status = 'PENDING'
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus() {
        return 'Pull request Satus: ${this.status}'
    }
}