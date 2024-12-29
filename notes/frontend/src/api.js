//axios = HTTP client library that you can use to make requests from React application

// what is the purpose of interceptors?
// the purpose of interceptors is to intercept the request or response before they are handled by the then or catch methods

import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const apiUrl = "/choreo-apis/notesdjangoreact/backend/v1"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl
})

api.interceptors.request.use((config) => { //to see if we have access token
    const token = localStorage.getItem(ACCESS_TOKEN) //get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}` //if we have token, we add it to the headers
      //what is the purpose of adding the token to the headers?
      //the purpose of adding the token to the headers is to authenticate the user

      //what is request headers?
      //request headers are the headers that are sent to the server with the request

      //what is `Bearer ${token}`?
      //`Bearer ${token}` is the token that is sent to the server with the request which is syntactically correct

      //why `Bearer` ?
      //`Bearer` is used to indicate that the token is a bearer token which is a type of token that is used to authenticate the user
    }
    return config
  }, (error) => { //if we have an error
    return Promise.reject(error) //return the error
    //why Promise.reject()?
    //Promise.reject() is used to return a rejected promise

    //what if the return promise not rejected and what supposed to be used?
    //if the return promise is not rejected, then the promise will be resolved and Promise.resolve() should be used which means that the promise is resolved => the promise is fulfilled
  }
)

export default api

// other way to get the token other than local storage and cookies?
// other ways to get the token are:
// 1. Session Storage
// 2. IndexedDB
// 3. Web Storage API
// 4. Web SQL Database
// 5. Cache API
// 6. Service Workers
// 7. Web Workers
// 8. Application Cache
// 9. File System API
// 10. WebRTC
// 11. WebSockets
// 12. WebRTC Data Channels
// 13. WebRTC Peer Connection
// 14. WebRTC MediaStream
// 15. WebRTC DataChannel
// 16. WebRTC MediaStreamTrack
// 17. WebRTC RTCPeerConnection
// 18. WebRTC RTCDataChannel
// 19. WebRTC RTCIceCandidate
// 20. WebRTC RTCSessionDescription
// 21. WebRTC RTCPeerConnectionIceEvent
// 22. WebRTC RTCDataChannelEvent
// 23. WebRTC MediaStreamEvent
// 24. WebRTC MediaStreamTrackEvent
// 25. WebRTC RTCPeerConnectionIceEvent
// 26. WebRTC RTCDataChannelEvent

// easiest way to get the token and why?
// the easiest way to get the token is to use the local storage
// because it is simple to use and it is supported by all the browsers

// most secure way to get the token?
// the most secure way to get the token is to use the cookies

// most efficient way to get the token online?
// the most efficient way to get the token online is to use OAuth 2.0
// because it is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites without sharing their passwords.
// OAuth 2.0 allows users to grant third-party websites or applications limited access to their resources, hosted on other websites.
//Users only need to authorize the access using their credentials, without revealing their passwords to the third-party applications.
//Access tokens are issued to the third-party application after user authorization, which can then be used to access the user's resources.
//Authorization: Usually, users themselves grant the permissions to access their resources.
//Administrator Role: In some cases, administrators can grant access to certain applications on behalf of users, but this depends on the specific OAuth implementation and policies of the service provider.
