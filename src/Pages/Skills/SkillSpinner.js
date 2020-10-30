import React, { useEffect } from 'react';
import './Skills.css'
import anime from 'animejs/lib/anime.es.js';

export default function SkillSpinner(props) {
  const {
    skills,
    setDisplayedSkill
  } = props;

  const numberOfEls = skills.skills.length;
  const duration = 6000;
  const delay = duration / numberOfEls;
  let tl = anime.timeline({
    duration: delay,
    complete: () => { tl.restart(); }
  });

  function animateobject(animation) {
    anime.remove(animation.targets);
    anime(animation);
  }

  function createEl(i) {
    let el = document.createElement('div');
    let clickbox = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    let innertext = document.createElement('innerText');
    innertext.innerHTML += skills.skills[i].Name;
    innertext.style.position = 'absolute';
    let textrotate = -1 * rotate;
    innertext.style.transform = 'rotate(' + textrotate + 'deg)';
    clickbox.appendChild(innertext);
    let movinganimation = {
      targets: el,
      backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 90%)'],
      rotate: [rotate + 'deg', rotate + 10 + 'deg'],
      translateY: [translateY + '%', translateY + 10 + '%'],
      scale: [1, 1.25],
      easing: 'easeInOutSine',
      direction: 'alternate',
      duration: duration * .1
    }
    tl.add({
      begin: function () {
        anime(movinganimation);
      }
    });

    clickbox.classList.add('clickbox');
    clickbox.addEventListener('mouseover', () => {
      let animation = {
        targets: el,
        scale: 1.2,
        duration: 800
      }
      animateobject(animation)
    })
    clickbox.addEventListener('mouseout', () => {
      let animation = {
        targets: el,
        scale: 1.0,
        duration: 600,
        translateY: translateY,
        rotate: rotate
      }
      animateobject(animation)
    })
    clickbox.addEventListener('click', () => {
      if (skills.skills[i].Projects.length > 0) {
        setDisplayedSkill(skills.skills[i])
      } else {
        setDisplayedSkill(null)
      }
    })
    const wrapperEl = document.querySelector('.wrapper');
    el.appendChild(clickbox);
    wrapperEl.appendChild(el);
  };

  function createSpinner() {
    const wrapperEl = document.querySelector('.wrapper');
    wrapperEl.innerHTML = '';
    for (let i = 0; i < numberOfEls; i++) createEl(i);
  }

  useEffect(() => {
    createSpinner();
  })

  return (
    <>
      <h1 className='text-center'>Skills</h1>
      <div className="wrapper">
        {/* Animations go here */}
      </div>
    </>
  )
}