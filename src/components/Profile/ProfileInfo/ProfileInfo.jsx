import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://cdn24.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg' alt="description" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
    </div>
    </div>
  );
}

export default ProfileInfo;