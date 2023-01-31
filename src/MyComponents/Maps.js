import React from 'react'

const Maps = () => {
  return (
    <div>
        <div class="google_maps">
        <div class="container-fluid g-0">
            <div class="row g-0">
                <div class="col-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13605.96188258684!2d74.3704655!3d31.510686399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1671715889851!5m2!1sen!2s"
                         style={{border:0}} allowfullscreen="" loading=""
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Maps
