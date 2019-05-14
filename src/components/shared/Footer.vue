<template>
  <transition name='footer' mode="out-in">
    <div
      :class='{kort__footer_folded: isFolded}'
      class="kort__footer"
    >
      <div class="card kort__contacts">
        <div class="kort__contacts-bg"></div>
        <router-link
          to='/adress'
          class="kort__lead kort__adress"
        >Адреса</router-link>
        <div class="kort__contacts-content">
          <a href="tel:+79151044141" @click='telClick' class="kort__contacts-phone">8 915 104 41 41</a>
          <div class="kort__contacts-social">
            <a @click='igClick' class="kort__contacts-link">
              <!-- <svg-icon title="inst" name="inst"></svg-icon> -->
              <svg
                class='svg-icon--inst'
                version="1.1"
                id="Режим_изоляции"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 64.6 64.6"
                style="enable-background:new 0 0 64.6 64.6;"
                xml:space="preserve"
              >
                <path
                  class="st0"
                  d="M45.3,6.1c3.1,0.1,4.8,0.7,6,1.1c1.5,0.6,2.6,1.3,3.7,2.4c1.1,1.1,1.8,2.2,2.4,3.7c0.4,1.1,1,2.8,1.1,6
                  c0.4,8.6,0.4,17.4,0,26c-0.1,3.1-0.7,4.8-1.1,6c-0.6,1.5-1.3,2.6-2.4,3.7c-1.1,1.1-2.2,1.8-3.7,2.4c-1.1,0.4-2.8,1-6,1.1
                  c-8.6,0.4-17.4,0.4-26,0c-3.1-0.1-4.8-0.7-6-1.1c-1.5-0.6-2.6-1.3-3.7-2.4c-1.1-1.1-1.8-2.2-2.4-3.7c-0.4-1.1-1-2.8-1.1-6
                  c-0.4-8.6-0.4-17.4,0-26c0.1-3.1,0.7-4.8,1.1-6c0.6-1.5,1.3-2.6,2.4-3.7c1.1-1.1,2.2-1.8,3.7-2.4c1.1-0.4,2.8-1,6-1.1
                  C27.9,5.7,36.7,5.7,45.3,6.1L45.3,6.1z M19,0.3c-3.4,0.2-5.8,0.7-7.8,1.5C9.1,2.6,7.3,3.7,5.5,5.5c-1.8,1.8-2.9,3.6-3.7,5.7
                  c-0.8,2-1.3,4.4-1.5,7.8c-0.4,8.8-0.4,17.7,0,26.6C0.5,49,1,51.4,1.8,53.4c0.8,2.1,1.9,3.9,3.7,5.7c1.8,1.8,3.6,2.9,5.7,3.7
                  c2,0.8,4.4,1.3,7.8,1.5c8.8,0.4,17.7,0.4,26.6,0c3.4-0.2,5.8-0.7,7.8-1.5c2.1-0.8,3.9-1.9,5.7-3.7c1.8-1.8,2.9-3.6,3.7-5.7
                  c0.8-2,1.3-4.4,1.5-7.8c0.4-8.8,0.4-17.7,0-26.6c-0.2-3.4-0.7-5.8-1.5-7.8c-0.8-2.1-1.9-3.9-3.7-5.7c-1.8-1.8-3.6-2.9-5.7-3.7
                  c-2-0.8-4.4-1.3-7.8-1.5C36.8-0.1,27.8-0.1,19,0.3L19,0.3z M32.3,15.8c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5
                  c9.1,0,16.5-7.4,16.5-16.5C48.8,23.2,41.4,15.8,32.3,15.8L32.3,15.8z M32.3,43c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7
                  c5.9,0,10.7,4.8,10.7,10.7C43,38.2,38.2,43,32.3,43L32.3,43z M53.4,15.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9
                  c0-2.1,1.7-3.9,3.9-3.9C51.6,11.3,53.4,13,53.4,15.1L53.4,15.1z"
                />
              </svg>
            </a>
            <a @click='vkClick' class="kort__contacts-link">
              <svg
                class='svg-icon--vk'
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 548.4 312.9"
                style="enable-background:new 0 0 548.4 312.9;"
                xml:space="preserve"
              >
                <g>
                  <path d="M545.5,282.5c-0.7-1.4-1.3-2.6-1.9-3.6c-9.5-17.1-27.7-38.2-54.5-63.1l-0.6-0.6l-0.3-0.3l-0.3-0.3h-0.3
                  c-12.2-11.6-19.9-19.4-23.1-23.4c-5.9-7.6-7.2-15.3-4-23.1c2.3-5.9,10.9-18.4,25.7-37.4c7.8-10.1,14-18.2,18.6-24.3
                  c32.9-43.8,47.2-71.8,42.8-83.9l-1.7-2.8c-1.1-1.7-4.1-3.3-8.8-4.7c-4.8-1.4-10.9-1.7-18.3-0.7l-82.2,0.6c-1.3-0.5-3.2-0.4-5.7,0.1
                  c-2.5,0.6-3.7,0.9-3.7,0.9l-1.4,0.7l-1.1,0.9c-1,0.6-2,1.6-3.1,3c-1.1,1.4-2.1,3.1-2.8,5c-9,23-19.1,44.4-30.6,64.2
                  c-7,11.8-13.5,22-19.4,30.7c-5.9,8.7-10.8,15-14.8,19.1c-4,4.1-7.6,7.4-10.9,9.8c-3.2,2.5-5.7,3.5-7.4,3.1
                  c-1.7-0.4-3.3-0.8-4.9-1.1c-2.7-1.7-4.8-4-6.4-7c-1.6-3-2.7-6.7-3.3-11.1c-0.6-4.5-0.9-8.3-1-11.6c-0.1-3.2,0-7.8,0.1-13.7
                  c0.2-5.9,0.3-9.9,0.3-12c0-7.2,0.1-15.1,0.4-23.6c0.3-8.5,0.5-15.2,0.7-20.1c0.2-4.9,0.3-10.2,0.3-15.7s-0.3-9.8-1-13
                  c-0.7-3.1-1.7-6.2-3-9.1c-1.3-2.9-3.3-5.2-5.9-6.9c-2.6-1.6-5.8-2.9-9.6-3.9c-10.1-2.3-22.9-3.5-38.5-3.7
                  c-35.4-0.4-58.1,1.9-68.2,6.9c-4,2.1-7.6,4.9-10.8,8.6c-3.4,4.2-3.9,6.5-1.4,6.9c11.4,1.7,19.5,5.8,24.3,12.3l1.7,3.4
                  c1.3,2.5,2.7,6.9,4,13.1c1.3,6.3,2.2,13.2,2.6,20.8c0.9,13.9,0.9,25.8,0,35.7c-1,9.9-1.9,17.6-2.7,23.1c-0.9,5.5-2.1,10-3.9,13.4
                  c-1.7,3.4-2.9,5.5-3.4,6.3c-0.6,0.8-1,1.2-1.4,1.4c-2.5,0.9-5,1.4-7.7,1.4c-2.7,0-5.9-1.3-9.7-4c-3.8-2.7-7.8-6.3-11.8-11
                  c-4.1-4.7-8.7-11.2-13.9-19.6c-5.1-8.4-10.5-18.3-16-29.7l-4.6-8.3c-2.9-5.3-6.8-13.1-11.7-23.3c-5-10.2-9.3-20-13.1-29.6
                  c-1.5-4-3.8-7-6.9-9.1l-1.4-0.9c-0.9-0.8-2.5-1.6-4.6-2.4c-2.1-0.9-4.3-1.5-6.6-1.9l-78.2,0.6c-8,0-13.4,1.8-16.3,5.4l-1.1,1.7
                  C0.3,22.4,0,23.9,0,26c0,2.1,0.6,4.7,1.7,7.7C13.1,60.6,25.6,86.4,39,111.4s25.1,45,35,60.2c9.9,15.2,20,29.6,30.3,43.1
                  c10.3,13.5,17.1,22.2,20.4,26c3.3,3.8,6,6.7,7.9,8.6l7.1,6.9c4.6,4.6,11.3,10,20.1,16.4c8.9,6.4,18.7,12.7,29.4,18.9
                  c10.8,6.2,23.3,11.2,37.5,15.1c14.3,3.9,28.2,5.5,41.7,4.7h32.8c6.7-0.6,11.7-2.7,15.1-6.3l1.1-1.4c0.8-1.1,1.5-2.9,2.1-5.3
                  c0.7-2.4,1-5,1-7.9c-0.2-8.2,0.4-15.6,1.9-22.1c1.4-6.6,3-11.5,4.9-14.8c1.8-3.3,3.9-6.1,6.1-8.4c2.3-2.3,3.9-3.7,4.9-4.1
                  c0.9-0.5,1.7-0.8,2.3-1c4.6-1.5,9.9,0,16.1,4.4c6.2,4.5,12,10,17.4,16.6c5.4,6.6,11.9,13.9,19.6,22.1c7.6,8.2,14.3,14.3,20,18.3
                  l5.7,3.4c3.8,2.3,8.8,4.4,14.9,6.3c6.1,1.9,11.4,2.4,16,1.4l73.1-1.1c7.2,0,12.9-1.2,16.8-3.6c4-2.4,6.4-5,7.1-7.9
                  c0.8-2.9,0.8-6.1,0.1-9.7C546.8,286.5,546.1,284,545.5,282.5z" />
                </g>
              </svg>
              <!-- <svg-icon title="vk" name="vk"></svg-icon> -->
            </a>
          </div>
        </div>
      </div>
      <div class="card kort__info">
        <transition
          name='info-buttons'
          mode='out-in'
        >
          <div
            class="kort__info_buttons"
            v-if='!isFolded'
          >
            <div
              @click='showTry'
              class="button button_green kort__info_button"
            >
              <span class="kort__info_button-text">подать заявку</span>
            </div>
            <router-link
              tag='div'
              to='/contacts'
              class="button button_grey kort__info_button kort__info_button_grey"
            >
              <span class="kort__info_button-text">контакты</span>
            </router-link>
          </div>
        </transition>
        <transition name='social'
                    mode="out-in">
          <div class="kort__info-social">
            <a @click='igClick' class="kort__contacts-link">
              <!-- <svg-icon title="inst" name="inst"></svg-icon> -->
              <svg
                class='svg-icon--inst'
                version="1.1"
                id="Режим_изоляции"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 64.6 64.6"
                style="enable-background:new 0 0 64.6 64.6;"
                xml:space="preserve"
              >
                <path
                  class="st0"
                  d="M45.3,6.1c3.1,0.1,4.8,0.7,6,1.1c1.5,0.6,2.6,1.3,3.7,2.4c1.1,1.1,1.8,2.2,2.4,3.7c0.4,1.1,1,2.8,1.1,6
                    c0.4,8.6,0.4,17.4,0,26c-0.1,3.1-0.7,4.8-1.1,6c-0.6,1.5-1.3,2.6-2.4,3.7c-1.1,1.1-2.2,1.8-3.7,2.4c-1.1,0.4-2.8,1-6,1.1
                    c-8.6,0.4-17.4,0.4-26,0c-3.1-0.1-4.8-0.7-6-1.1c-1.5-0.6-2.6-1.3-3.7-2.4c-1.1-1.1-1.8-2.2-2.4-3.7c-0.4-1.1-1-2.8-1.1-6
                    c-0.4-8.6-0.4-17.4,0-26c0.1-3.1,0.7-4.8,1.1-6c0.6-1.5,1.3-2.6,2.4-3.7c1.1-1.1,2.2-1.8,3.7-2.4c1.1-0.4,2.8-1,6-1.1
                    C27.9,5.7,36.7,5.7,45.3,6.1L45.3,6.1z M19,0.3c-3.4,0.2-5.8,0.7-7.8,1.5C9.1,2.6,7.3,3.7,5.5,5.5c-1.8,1.8-2.9,3.6-3.7,5.7
                    c-0.8,2-1.3,4.4-1.5,7.8c-0.4,8.8-0.4,17.7,0,26.6C0.5,49,1,51.4,1.8,53.4c0.8,2.1,1.9,3.9,3.7,5.7c1.8,1.8,3.6,2.9,5.7,3.7
                    c2,0.8,4.4,1.3,7.8,1.5c8.8,0.4,17.7,0.4,26.6,0c3.4-0.2,5.8-0.7,7.8-1.5c2.1-0.8,3.9-1.9,5.7-3.7c1.8-1.8,2.9-3.6,3.7-5.7
                    c0.8-2,1.3-4.4,1.5-7.8c0.4-8.8,0.4-17.7,0-26.6c-0.2-3.4-0.7-5.8-1.5-7.8c-0.8-2.1-1.9-3.9-3.7-5.7c-1.8-1.8-3.6-2.9-5.7-3.7
                    c-2-0.8-4.4-1.3-7.8-1.5C36.8-0.1,27.8-0.1,19,0.3L19,0.3z M32.3,15.8c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5
                    c9.1,0,16.5-7.4,16.5-16.5C48.8,23.2,41.4,15.8,32.3,15.8L32.3,15.8z M32.3,43c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7
                    c5.9,0,10.7,4.8,10.7,10.7C43,38.2,38.2,43,32.3,43L32.3,43z M53.4,15.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9
                    c0-2.1,1.7-3.9,3.9-3.9C51.6,11.3,53.4,13,53.4,15.1L53.4,15.1z"
                />
              </svg>
            </a>
            <a @click='vkClick' class="kort__contacts-link">
              <!-- <svg-icon title="vk" name="vk"></svg-icon> -->
              <svg
                class='svg-icon--vk'
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 548.4 312.9"
                style="enable-background:new 0 0 548.4 312.9;"
                xml:space="preserve"
              >
                <g>
                  <path d="M545.5,282.5c-0.7-1.4-1.3-2.6-1.9-3.6c-9.5-17.1-27.7-38.2-54.5-63.1l-0.6-0.6l-0.3-0.3l-0.3-0.3h-0.3
                    c-12.2-11.6-19.9-19.4-23.1-23.4c-5.9-7.6-7.2-15.3-4-23.1c2.3-5.9,10.9-18.4,25.7-37.4c7.8-10.1,14-18.2,18.6-24.3
                    c32.9-43.8,47.2-71.8,42.8-83.9l-1.7-2.8c-1.1-1.7-4.1-3.3-8.8-4.7c-4.8-1.4-10.9-1.7-18.3-0.7l-82.2,0.6c-1.3-0.5-3.2-0.4-5.7,0.1
                    c-2.5,0.6-3.7,0.9-3.7,0.9l-1.4,0.7l-1.1,0.9c-1,0.6-2,1.6-3.1,3c-1.1,1.4-2.1,3.1-2.8,5c-9,23-19.1,44.4-30.6,64.2
                    c-7,11.8-13.5,22-19.4,30.7c-5.9,8.7-10.8,15-14.8,19.1c-4,4.1-7.6,7.4-10.9,9.8c-3.2,2.5-5.7,3.5-7.4,3.1
                    c-1.7-0.4-3.3-0.8-4.9-1.1c-2.7-1.7-4.8-4-6.4-7c-1.6-3-2.7-6.7-3.3-11.1c-0.6-4.5-0.9-8.3-1-11.6c-0.1-3.2,0-7.8,0.1-13.7
                    c0.2-5.9,0.3-9.9,0.3-12c0-7.2,0.1-15.1,0.4-23.6c0.3-8.5,0.5-15.2,0.7-20.1c0.2-4.9,0.3-10.2,0.3-15.7s-0.3-9.8-1-13
                    c-0.7-3.1-1.7-6.2-3-9.1c-1.3-2.9-3.3-5.2-5.9-6.9c-2.6-1.6-5.8-2.9-9.6-3.9c-10.1-2.3-22.9-3.5-38.5-3.7
                    c-35.4-0.4-58.1,1.9-68.2,6.9c-4,2.1-7.6,4.9-10.8,8.6c-3.4,4.2-3.9,6.5-1.4,6.9c11.4,1.7,19.5,5.8,24.3,12.3l1.7,3.4
                    c1.3,2.5,2.7,6.9,4,13.1c1.3,6.3,2.2,13.2,2.6,20.8c0.9,13.9,0.9,25.8,0,35.7c-1,9.9-1.9,17.6-2.7,23.1c-0.9,5.5-2.1,10-3.9,13.4
                    c-1.7,3.4-2.9,5.5-3.4,6.3c-0.6,0.8-1,1.2-1.4,1.4c-2.5,0.9-5,1.4-7.7,1.4c-2.7,0-5.9-1.3-9.7-4c-3.8-2.7-7.8-6.3-11.8-11
                    c-4.1-4.7-8.7-11.2-13.9-19.6c-5.1-8.4-10.5-18.3-16-29.7l-4.6-8.3c-2.9-5.3-6.8-13.1-11.7-23.3c-5-10.2-9.3-20-13.1-29.6
                    c-1.5-4-3.8-7-6.9-9.1l-1.4-0.9c-0.9-0.8-2.5-1.6-4.6-2.4c-2.1-0.9-4.3-1.5-6.6-1.9l-78.2,0.6c-8,0-13.4,1.8-16.3,5.4l-1.1,1.7
                    C0.3,22.4,0,23.9,0,26c0,2.1,0.6,4.7,1.7,7.7C13.1,60.6,25.6,86.4,39,111.4s25.1,45,35,60.2c9.9,15.2,20,29.6,30.3,43.1
                    c10.3,13.5,17.1,22.2,20.4,26c3.3,3.8,6,6.7,7.9,8.6l7.1,6.9c4.6,4.6,11.3,10,20.1,16.4c8.9,6.4,18.7,12.7,29.4,18.9
                    c10.8,6.2,23.3,11.2,37.5,15.1c14.3,3.9,28.2,5.5,41.7,4.7h32.8c6.7-0.6,11.7-2.7,15.1-6.3l1.1-1.4c0.8-1.1,1.5-2.9,2.1-5.3
                    c0.7-2.4,1-5,1-7.9c-0.2-8.2,0.4-15.6,1.9-22.1c1.4-6.6,3-11.5,4.9-14.8c1.8-3.3,3.9-6.1,6.1-8.4c2.3-2.3,3.9-3.7,4.9-4.1
                    c0.9-0.5,1.7-0.8,2.3-1c4.6-1.5,9.9,0,16.1,4.4c6.2,4.5,12,10,17.4,16.6c5.4,6.6,11.9,13.9,19.6,22.1c7.6,8.2,14.3,14.3,20,18.3
                    l5.7,3.4c3.8,2.3,8.8,4.4,14.9,6.3c6.1,1.9,11.4,2.4,16,1.4l73.1-1.1c7.2,0,12.9-1.2,16.8-3.6c4-2.4,6.4-5,7.1-7.9
                    c0.8-2.9,0.8-6.1,0.1-9.7C546.8,286.5,546.1,284,545.5,282.5z" />
                </g>
              </svg>
            </a>
          </div>
        </transition>
        <div class="kort__info-info">
          <p class="kort__info-copyright">
            © Kort 12, 2009—2019
          </p>
          <a
            href="https://rechi.media"
            class="kort__info-dev"
            @click='rClick'
          >
            <!-- <svg-icon title="rechi" name="rechi"></svg-icon> -->
            <svg
              class='svg-icon--rechi'
              version="1.1"
              id="Слой_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 95 37"
              style="enable-background:new 0 0 95 37;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path d="M14.5,0H7.4v7.3h7.1V0z M7.1,0H0l7.1,7.3V0z M14.8,7.3h7.1V0h-7.1V7.3z M29.2,0h-7.1v7.3h7.1V0z M29.4,0v7.3h7.1L29.4,0z
                      M29.4,14.8h7.1V7.5h-7.1V14.8z M22.3,22.2h7.1v-7.3h-7.1V22.2z M29.4,29.6h7.1v-7.3h-7.1V29.6z M36.5,36.9h7.1v-7.3h-7.1V36.9z
                      M7.4,37h7.1v-7.3H7.4V37z M7.2,37v-7.3H0.1L7.2,37z M14.5,29.7h7.1v-7.3h-7.1V29.7z M7.2,22.2H0.1v7.3h7.1V22.2z M0.1,22.1h7.1
                      v-7.3H0.1V22.1z M55.2,12.3h1.5l1.9,2.9h2.3L58.7,12c1.1-0.4,1.9-1.3,1.9-2.8c0-0.9-0.3-1.6-0.8-2.1c-0.6-0.6-1.4-0.9-2.6-0.9h-4
                      v9h1.9V12.3z M55.2,8h1.9c0.9,0,1.5,0.4,1.5,1.3c0,0.8-0.5,1.3-1.5,1.3h-2V8z M69,13.4h-4.8v-1.9h4.1V9.8h-4.1V7.9h4.7V6.2h-6.6v9
                      H69V13.4z M78.4,13.8l-1.2-1.3c-0.7,0.6-1.3,1-2.3,1c-1.5,0-2.5-1.3-2.5-2.8c0-1.6,1.1-2.8,2.5-2.8c1,0,1.6,0.4,2.3,1l1.2-1.4
                      C77.4,6.7,76.5,6,74.8,6c-2.7,0-4.6,2.1-4.6,4.6c0,2.6,1.9,4.6,4.5,4.6C76.5,15.3,77.5,14.8,78.4,13.8z M87.3,15.2v-9h-1.9v3.5
                      h-3.6V6.2h-1.9v9h1.9v-3.6h3.6v3.6H87.3z M91.4,6.2h-1.9v9h1.9V6.2z M57.6,25.3l-2.3-3.8h-2.1v9h1.9v-5.8l2.4,3.8h0.1l2.5-3.8v5.8
                      H62v-9h-2.1L57.6,25.3z M66,26.9h4.1v-1.8H66v-1.8h4.7v-1.8h-6.6v9h6.7v-1.8H66V26.9z M75.9,21.6h-3.4v9h3.4c2.8,0,4.7-2,4.7-4.5
                      C80.6,23.5,78.7,21.6,75.9,21.6z M75.9,28.7h-1.5v-5.4h1.5c1.6,0,2.6,1.1,2.6,2.7C78.5,27.6,77.5,28.7,75.9,28.7z M82.4,30.5h1.9
                      v-9h-1.9V30.5z M91.2,21.5h-1.8l-3.8,9h2l0.8-2h3.7l0.8,2h2L91.2,21.5z M89.2,26.8l1.2-2.9l1.2,2.9H89.2z" />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="kort__footer-mob">
        <div class="kort__footer-mob-row">
          <button
            @click='showTry'
            class="button button_trans kort__footer-mob-button"
          >
            <span class="kort__footer-mob-button-text">Подать заявку</span>
          </button>
          <div class="kort__contacts-content">
            <a href="tel:+79151044141" @click='telClick' class="kort__contacts-phone">8 915 104 41 41</a>
            <div class="kort__contacts-social">
              <a @click='igClick' class="kort__contacts-link">
                <svg-icon
                  title="inst"
                  name="inst"
                ></svg-icon>
              </a>
              <a @click='vkClick' class="kort__contacts-link">
                <svg-icon
                  title="vk"
                  name="vk"
                ></svg-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="kort__footer-mob-row">
          <div class="kort__info-info">
            <p class="kort__info-copyright">
              © Kort 12, 2009—2019
            </p>
            <a @click='rClick'
              href="https://rechi.media"
              class="kort__info-dev"
            >
              <svg-icon
                title="rechi"
                name="rechi"
              ></svg-icon>
            </a>
          </div>
        </div>
      </div>
      <modal
        width='450'
        :height='"auto"'
        name='try'
        @before-open="beforeOpen"
        @before-close="beforeClose"
      >
        <div class="form">
          <div slot="top-right">
            <button
              class="close"
              @click="$modal.hide('try')"
            >
              <div class="close-line close-line_1"></div>
              <div class="close-line close-line_2"></div>
            </button>
          </div>
          <FeedbackModal formTheme='Главная, футер. Пробное занятие' formTitle='Оставьте заявку на пробное занятие'></FeedbackModal>
        </div>
      </modal>
    </div>
  </transition>
  
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import { mapState } from 'vuex'
import FeedbackModal from './FeedbackModal'

export default {
  name: 'Footer',
  computed: {
    ...mapState(['campHeading', 'isFolded', 'modalType'])
  },
  components: {
    SvgIcon,
    FeedbackModal
  },
  methods: {
    showTry () {
      this.$modal.show('try')
      this.$metrika.reachGoal('index_modalform_open')
      this.$metrika.reachGoal('forms_open')
      this.$store.commit('SET_MODAL_TYPE', 'index_modalform_send')
    },
    hideTry () {
      this.$modal.hide('try')
    },
    beforeOpen (event) {
      document.body.classList.add('body_modalopen')
    },
    beforeClose (event) {
      document.body.classList.remove('body_modalopen')
      this.$store.commit('SET_MODAL_TYPE', '')
    },
    igClick () {
      console.log('insta')
      this.$metrika.reachGoal('ig_click')
    },
    vkClick () {
      console.log('vk')
      this.$metrika.reachGoal('vk_click')
    },
    rClick () {
      console.log('rechi')
      this.$metrika.reachGoal('r_click')
    },
    telClick () {
      console.log('phone')
      this.$metrika.reachGoal('tel_click')
    }
  }
}
</script>

<style lang="scss" scoped>
.kort {
  &__footer {
    display: flex;
    margin-top: rem(7px);
    height: rem(110px);
    transition: height 1.5s ease-in-out;
    z-index: 3;
    position: sticky;
    bottom: 0;
      left: 0;
    /* @include mac {
      height: rem(215px);
    } */
    @include tablets {
      height: rem(193px);
    }
    @include phones {
      height: rem(200px);
    }

    &-mob {
      display: none;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      @include phones {
        display: flex;
      }

      &-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #0d227d;
        padding: rem(25px) rem(15px);
        .kort__info-copyright {
          color: white;
        }
      }
      &-button {
        width: rem(164px);
        height: rem(64px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: white;
        &-text {
          @include futura(book);
          color: white;
          font-size: rem(16px);
          text-transform: uppercase;
        }
      }
    }

    &_folded {
      height: rem(65px);
      width: 100%;
      background: #f0f1fa;
      margin-top: 0;

      /* @include mac {
        height: rem(115px);
      } */

      @include tablets {
        height: rem(97px);
      }

      @include phones {
        height: rem(220px);
        position: relative;
        margin-top: 0;
      }

      .card {
        border-radius: 0;
      }

      .kort__contacts-social {
        transform: translateY(200%);
        @include phones {
          transform: translateY(0);
        }
      }

      .kort__info-social {
        transition-delay: 1s;
        transform: translateY(0);
      }

      /* .kort__info_button {
        opacity: 0;
        width: rem(153px);
        height: rem(39px);
      } */
      .kort__footer-mob-button {
        display: none;
      }

      .kort__contacts-phone {
        color: #41464e;
        margin-top: rem(16px);
        @include tablets {
          margin-top: rem(34px);
        }
      }

      .kort__head-wrap {
        padding: 1% 0;
      }

      .svg-icon--inst {
        fill: #41464e;
        &:hover {
          fill: #02b541;
        }
      }

      .svg-icon--vk {
        fill: #41464e;
        &:hover {
          fill: #02b541;
        }
      }

      .kort__info-copyright {
        color: #41464e;
      }

      .svg-icon--rechi {
        fill: #0d227d;
      }

      .kort__footer-mob-row {
        &:first-of-type {
          justify-content: center;
          background: #e4e6f4;
        }
        &:last-of-type {
          background: #f0f1fa;
        }
        .kort__contacts-content {
          align-items: center;
        }
      }

      .kort__contacts .kort__lead {
        @include tablets {
          margin-bottom: 0;
        }
      }

      .kort__adress {
        font-size: rem(22px);
        line-height: rem(26px);
      }
    }
  }

  &__contacts {
    width: 50%;
    background-size: cover;
    justify-content: space-between;
    padding-right: rem(40px);
    margin-right: rem(7px);
    position: relative;
    overflow: hidden;
    @include tablets {
      background: #f0f1fa;
    }
    &:hover {
      .kort__contacts-bg {
        transform: scale(1.1);
      }
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: url(~@/assets/moscow_bg.jpg) left center no-repeat;
      background-size: cover;
      transition: transform 1.5s ease-in-out;
      @include mac {
        background: url(~@/assets/moscow_bg_uhd.jpg) center center no-repeat;
        background-size: cover;
      }
      @include tablets {
        display: none;
      }
    }
    @include phones {
      display: none;
    }

    .kort__lead {
      margin-left: 50%;
      display: flex;
      align-items: center;
      cursor: pointer;

      @include tablets {
        margin-left: rem(30px);
        margin-bottom: rem(40px);
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      @include tablets {
      }
      @include phones {
        align-items: flex-start;
      }
    }

    &-phone {
      color: #41464e;
      @include futura(book);
      font-size: rem(18px);
      line-height: rem(30px);
      transition: transform 1.5s ease-in-out;
      /* @include mac {
        font-size: rem(28px);
        margin-bottom: rem(10px);
      } */
      @include tablets {
        margin-bottom: rem(10px);
      }
      @include phones {
        font-size: rem(22px);
        color: white;
      }
      @include iphones {
        font-size: rem(18px);
      }
    }

    &-link {
      margin-right: rem(15px);
      display: flex;
      align-items: center;

      &:last-of-type {
        margin-right: 0;
      }
    }

    &-social {
      display: flex;
      transition: transform 1.5s ease-in-out;

      &-img {
        width: rem(19px);
        height: rem(19px);
        fill: #41464e;
      }
    }
  }

  &__info {
    width: 50%;
    background: #f0f1fa;
    padding: 0 rem(37px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @include phones {
      display: none;
    }

    @include bignotebooks {
      padding: 0 rem(20px);
    }

    &_folded {
      justify-content: flex-end;
    }

    &-social {
      position: absolute;
      left: 20px;
      transition: transform 0.5s ease-in-out;
      transform: translateY(200px);
      display: flex;
    }

    &-copyright {
      font-size: rem(14px);
      line-height: rem(22px);
      @include futura(book);
      color: #41464e;
      display: flex;
      align-items: center;
      margin-right: rem(50px);
      /* @include mac {
        font-size: rem(24px);
      } */

      @include bignotebooks {
        margin-right: rem(20px);
      }
      @include tablets {
        margin-bottom: rem(15px);
      }

      @include phones {
        margin-bottom: 0;
        margin-left: rem(20px);
      }
    }

    &-info {
      display: flex;
      @include tablets {
        flex-direction: column;
      }
      @include phones {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }
    }

    &-dev {
      display: flex;
      align-items: center;

      @include phones {
        width: rem(146px);
      }

      &-logo {
        width: rem(46px);
        height: rem(37px);
        fill: #0d227d;
        margin-right: rem(17px);
      }

      &-info {
        display: flex;
        flex-direction: column;
      }

      &-text {
        font-size: rem(14px);
        line-height: rem(26px);
        @include futura(book);
        color: #41464e;
      }

      &-rechi {
        font-size: rem(14px);
        line-height: rem(26px);
        @include futura(demi);
        color: #41464e;
      }
    }
    &_buttons {
      display: flex;
      @include tablets {
        flex-direction: column;
      }
    }
    &_button {
      width: rem(160px);
      height: rem(55px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: rem(5px);
      transition: all 0.75s ease-in-out;
      opacity: 1;
      &:first-of-type {
        margin-right: rem(15px);
      }
      /* @include mac {
        width: rem(280px);
        height: rem(90px);
      } */
      @include macbookair {
        width: rem(120px);
        height: rem(45px);
      }
      @include tablets {
        width: rem(150px);
        height: rem(46px);
        margin-bottom: rem(10px);
        &:last-of-type {
          margin-bottom: 0;
        }
      }

      &_grey {
        span {
          color: black;
          &:hover {
            color: black;
          }
        }
      }

      &_folded {
        opacity: 0;
      }

      @include bignotebooks {
        width: rem(110px);
      }

      &-text {
        font-size: rem(16px);
        color: white;
        @include futura(book);
        text-transform: uppercase;

        /*  @include mac {
          font-size: rem(24px);
        } */

        @include macbookair {
          font-size: rem(14px);
        }
      }
    }
  }
}
.info-buttons {
  &-enter,
  &-leave-to {
    .kort__info_button {
      opacity: 0;
      width: rem(153px);
      height: rem(39px);
      transform: translateY(100%);
    }
  }

  &-enter-to,
  &-leave {
    .kort__info_button {
      width: rem(160px);
      height: rem(55px);
      transform: translateY(0);
      opacity: 1;
    }
  }

  &-enter-active,
  &-leave-active {
    transition: all 1.5s ease-in-out;
  }
}

.social {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: all 1.5s ease-in-out;
  }
}

.footer {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    position: fixed;
    transition: all 1.5s ease-in-out;
  }
}
</style>
