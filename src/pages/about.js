import React from 'react'
import styles from '../styles/about.module.css'

function about() {
  return (
    <div className={styles.service_container}>

      <div className="service-header">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda perferendis necessitatibus quaerat magni tempore, libero delectus unde quae officia sequi! Modi, vero earum!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda perferendis necessitatibus quaerat magni tempore, libero delectus unde quae officia sequi! Modi, vero earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio nulla officiis neque voluptas laborum quidem aut, doloremque modi pariatur repudiandae, autem deserunt.</p>
      </div>

      <div className={styles.services_container}>

      <h1>Our services</h1>
      <p>delivering services for more than 13 years </p>
      <ul>
        <li className={styles.services}>service 1</li>
        <li className={styles.services}>service 2</li>
        <li className={styles.services}>service 3</li>
        <li className={styles.services}>service 4</li>
      </ul>
      </div>
    </div>

  )
}

export default about
