import './style.css'
import { redirecToAuthCodeFlow,  getAccessToken, populateUI, fetchProfile } from './authentication'

const clientId = '5e91022d605b43d5840f0648348e9348';
const params = new URLSearchParams(window.location.search);
const code = params.get("code")

if(!code) {
  console.log(redirecToAuthCodeFlow(clientId))
} else {
  const acessToken = await getAccessToken(clientId, code)
  const profile = await fetchProfile(acessToken)
  populateUI(profile)
}

