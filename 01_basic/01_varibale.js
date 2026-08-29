const accountId = 12321312
let accountEmail = "hamza@google.com"
var accountPassword="12346"

/*
prefer not to  use var
bcz of issue in blockscope and functional scope
*/

accountCity="Delhi"

accountEmail="ham@google.com"
accountPassword="123411"
accountCity="bakwas"
console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])