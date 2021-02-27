import React from 'react'

const useMedia = (param) => {

  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function handleMedia() {
      const check =window.matchMedia(param).matches 
      setMatch(check)
    }
    handleMedia()
    window.addEventListener('resize', handleMedia)
    
    return () => {
      window.removeEventListener('resize', handleMedia)
    }
    

  }, [param])


  return match
}

export default useMedia