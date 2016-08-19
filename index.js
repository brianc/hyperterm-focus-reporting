exports.onWindow = win => {
  win.on('blur', () => {
    for (const [uuid, session] of win.sessions.entries()) {
      const onBlur = '\033[O'
      session.write(onBlur)
    }
  })
  win.on('focus', () => {
    for (const [uuid, session] of win.sessions.entries()) {
      const onFocus = '\033[I'
      session.write(onFocus)
    }
  })
}
