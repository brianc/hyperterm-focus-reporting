const fs = require('fs')

const out = fs.createWriteStream(__dirname + '/out.log')

const log = args => {
  out.write((args || '') + '\n', 'utf8')
}

log()
log('---load---')
log()

// fires when app is created
exports.onApp = app => {
  log('onApp')
}

exports.onWindow = win => {
  log('win')
  win.on('blur', () => {
    log('win blur')
    log('sessions: ' + win.sessions.size)
    for (const [uuid, session] of win.sessions.entries()) {
      const onBlur = '\033[O'
      log(`writing '${onBlur}'`)
      session.write(onBlur)
    }
  })
  win.on('focus', () => {
    log('win focus')
    log('sessions: ' + win.sessions.size)
    for (const [uuid, session] of win.sessions.entries()) {
      const onFocus = '\033[I'
      log(`writing '${onFocus}'`)
      session.write(onFocus)
    }
  })
}
