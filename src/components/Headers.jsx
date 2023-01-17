function Headers({text}) {
  const styles = {
    backgroundColor : 'rgba(0,0,0,0.4)' ,
    color : '#ff6a95'
  }
  return (
    <header style={styles}>
      <div className="container">
            <h2>{text}</h2>
        </div>
    </header>     
  )
}

Headers.defaultProps = {
  text : 'Users Feedback',
}


export default Headers;