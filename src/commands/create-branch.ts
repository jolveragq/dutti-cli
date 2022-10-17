import {CliUx, Command} from '@oclif/core'
const inquirer = require('inquirer')

const {spawn} = require('node:child_process')

export default class CreateBranch extends Command {
  public BRANCH_TYPES_ALLOWED = [
    {
      type: 'FEATURE',
      description: 'feature:       implementation of new features',
    },
    {
      type: 'BUGFIX',
      description: 'bugfix:        implementations that correspond to either a fix for a known bug that has been planned in a sprint or a bug detected during the functional review',
    },
    {
      type: 'RELEASE',
      description: 'release:       release branch',
    },
    {
      type: 'HOTFIX',
      description: 'hotfix:        fixes for production issues. It should be delivered in FIX releases',
    },
    {
      type: 'REFACTORING',
      description: 'refactoring:   improvements in order to reduce the technical debt',
    },
    {
      type: 'IMPROVEMENT',
      description: 'improvement:   other improvements',
    },
    {
      type: 'WIP',
      description: 'wip:           Work in progress. Tribes release branch',
    },
  ]

  public TRIBES_ALLOWED = ['CNT', 'COM', 'CRM', 'DAT', 'OPS', 'OT', 'PUR', 'SEO', 'SSR']
  public LABEL_RELATED = [
    'JIRA',
    'NO-TASK',
    'RELEASE-NAME',
  ]

  public MAX_DESC_LENGH = 80

  public typeBranch?: string
  public typeLabel?: string
  public labelDescription?: string
  public tribe?: string
  public labelBranchDescription?: string
  public dateTag = this.getDateTag()

  static args = []

  async run(): Promise<void> {
    this.log('\nWelcome to Massimo Dutti\'s CLI! 🚀\n')

    await this.getTypeBranch()

    if (this.typeBranch === 'RELEASE') {
      await this.getReleaseLabel()
    } else {
      await this.getTypeLabel()
      if (this.typeLabel === 'JIRA') {
        await this.getJiraLabel()
      }
    }

    await this.getTribe()

    await this.getDescription()

    const branchName = this.typeBranch === 'RELEASE' ?
      `${this.typeBranch?.toLowerCase()}/${this.labelDescription}` :
      `${this.typeBranch?.toLowerCase()}/${this.dateTag}/${this.tribe}/${this.labelDescription}${this.labelBranchDescription}`
    this.log(`[Success] ${branchName}`)
    const command = spawn('git', ['checkout', '-b', branchName])
    command.stdout.on('data', (output: any) => {
      this.log('DONE: ', output.toString())
      this.exit()
    })
  }

  private getDateTag() {
    const now = new Date()
    const monthString = (now.getMonth() + 1).toString().padStart(2, '0')
    return `WEB-${now.getFullYear()}-${monthString}`
  }

  private async getTypeBranch() {
    const responseTypeBranch: any = await inquirer.prompt([{
      name: 'type',
      message: 'select a type branch',
      type: 'list',
      choices: this.BRANCH_TYPES_ALLOWED.map(x => x.description),
    }])
    this.typeBranch = this.BRANCH_TYPES_ALLOWED.find(x => x.description === responseTypeBranch.type)?.type
    this.log(this.typeBranch)
  }

  private async getTypeLabel() {
    const responseTypeLabel: any = await inquirer.prompt([{
      name: 'type',
      message: 'select a type label',
      type: 'list',
      choices: this.LABEL_RELATED,
    }])
    this.typeLabel = responseTypeLabel.type
    this.log(this.typeLabel)
  }

  private async getJiraLabel() {
    this.labelDescription = await CliUx.ux.prompt(`JIRA code to implement i.e.:
          - ECOMDUTI-12345
    `)
    this.labelDescription = this.labelDescription?.toUpperCase()
    this.log(this.labelDescription)

    const regDescription = /^ECOMDUTI-\d{5,}/
    if (!regDescription.test(<string> this.labelDescription)) {
      this.error(new Error('INVALID ARGUMENTS'))
    }
  }

  private async getReleaseLabel() {
    this.labelDescription = await CliUx.ux.prompt(`The must comply the pattern '$\{RELEASE_PATTERN}' i.e.:
                   - v22-07-1-0 (main release)
                   - v22-07-1-1 (fix release) \n`)
    this.log(this.labelDescription)

    const regDescription = /^[Vv]\d{2}-\d{2}-\d-\d/
    if (!regDescription.test(<string> this.labelDescription)) {
      this.error(new Error('INVALID ARGUMENTS'))
    }
  }

  private async getTribe() {
    const responseTribe: any = await inquirer.prompt([{
      name: 'type',
      message: 'select the related tribe',
      type: 'list',
      choices: this.TRIBES_ALLOWED,
    }])
    this.tribe = responseTribe.type
    this.log(this.tribe)
  }

  private async getDescription() {
    this.labelBranchDescription = await CliUx.ux.prompt(`the branch description (max: ${this.MAX_DESC_LENGH} characters):`, {required: false})
    this.labelBranchDescription = this.parseDescription(this.labelBranchDescription)
    this.log(this.labelBranchDescription)
  }

  private parseDescription(description?: string): string {
    return description ?
      '-' + description.replace(/[^ A-Za-z]+/g, '').replace(/\s/g, '-') :
      ''
  }
}
