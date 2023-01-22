import React from "react";
export const baseUrl = () => {return("http://localhost/back-end-daneshyar") }
export const login = (e) => { return (e !== undefined) ? e : baseUrl()+"/login.php"}
export const signup = (e) => { return (e !== undefined) ? e : baseUrl()+"/singup.php"}
// export const createToken = (e) => { return (e !== undefined) ? e : baseUrl2()+"/authenticate" }
// export const registerUsers = (e) => { return (e !== undefined) ? e : baseUrl2()+"/users/update" }
// export const getUsers = (e) => { return (e !== undefined) ? e : baseUrl2()+"/getUsers" }
// export const submitDamage = (e) => { return (e !== undefined) ? e : baseUrl2()+"/Third-party-damage/save" }
// export const apiUserCase = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/Third-party-damage/getThirdPartyDamageCurentUser"}
// export const damagePersons = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/damage_persons/save"}
// export const deleteCase = (e) => { return (e !== undefined) ? (baseUrl2()+"/Third-party-damage/delete/"+e) : baseUrl2()+"/Third-party-damage/delete/" }
// export const uploadFiles = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/upload"}
// export const uploadCrooky = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/uploadCoroki"}
// export const evaluationRequest = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/Third-party-damage/evaluationRequest"}
// export const uploadPersonDocs = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/uploadPersonDocs"}

