import React from 'react'

export default function Map(props) {
    const {
      iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27567.148986774642!2d-103.62806419964326!3d19.636972780144287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84257d96e61f315b%3A0x627d00b9652df7dc!2sRancho%20los%20abuelos!5e0!3m2!1sen!2smx!4v1654373353032!5m2!1sen!2smx" width="100%" height="420px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } = props;
    return <div className="Map" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }


