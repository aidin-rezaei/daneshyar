import React from "react";
// export const baseUrl = () => {return("https://aidinr.ir/api/back-end-daneshyar") }
export const baseUrl = () => {return("http://localhost/back-end-daneshyar") }
export const login = (e) => { return (e !== undefined) ? e : baseUrl()+"/login.php"}
export const signup = (e) => { return (e !== undefined) ? e : baseUrl()+"/singup.php"}
export const getuser = (e) => { return (e !== undefined) ? e : baseUrl()+"/getuser.php"}
export const alogin = (e) => { return (e !== undefined) ? e : baseUrl()+"/alogin.php"}
export const getadmin = (e) => { return (e !== undefined) ? e : baseUrl()+"/getadmin.php"}
export const createbord = (e) => { return (e !== undefined) ? e : baseUrl()+"/createbord.php" }
export const getbords = (e) => { return (e !== undefined) ? e : baseUrl()+"/getbords.php" }
export const usergetsupervisors = (e) => { return (e !== undefined) ? e : baseUrl()+"/usergetsupervisors.php" }
export const usergetbords = (e) => { return (e !== undefined) ? e : baseUrl()+"/usergetbords.php" }
export const usergetchat = (e) => { return (e !== undefined) ? e : baseUrl()+"/usergetchat.php" }
export const usersendchat = (e) => { return (e !== undefined) ? e : baseUrl()+"/usersendchat.php" }
export const usergetposts = (e) => { return (e !== undefined) ? e : baseUrl()+"/usergetposts.php" }
export const admingetchat = (e) => { return (e !== undefined) ? e : baseUrl()+"/admingetchat.php" }
// export const getUsers = (e) => { return (e !== undefined) ? e : baseUrl2()+"/getUsers" }
// export const submitDamage = (e) => { return (e !== undefined) ? e : baseUrl2()+"/Third-party-damage/save" }
// export const apiUserCase = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/Third-party-damage/getThirdPartyDamageCurentUser"}
// export const damagePersons = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/damage_persons/save"}
// export const deleteCase = (e) => { return (e !== undefined) ? (baseUrl2()+"/Third-party-damage/delete/"+e) : baseUrl2()+"/Third-party-damage/delete/" }
// export const uploadFiles = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/upload"}
// export const uploadCrooky = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/uploadCoroki"}
// export const evaluationRequest = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/Third-party-damage/evaluationRequest"}
// export const uploadPersonDocs = (e) => {return (e !== undefined) ? e : baseUrl2()+ "/ThirdPartyDamageDocsAPI/uploadPersonDocs"}

