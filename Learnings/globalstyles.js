//Next js provide unique feature to create global styles
// and which is available in all the pages

//lets see how!

import React from 'react'

function globalstyles() {
  return (
    <>
    <style jsx global>
        {//this bracket is here beacuse we are writing js in jsx
        `
        .hello{//this bracket is here just as same as css
            color: red;
        }

        `
        }
    </style>
    <div>
      <h1 className='hello'>helooooooo</h1>
    </div>
    </>
  )
}

export default globalstyles

//imp note: we can use global styles in any page by declaring it in in style tag
