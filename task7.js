// 1.setup our http Request 
let xhr= new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

//3.Setup our listener to process the complete request

xhr.onload=function()
{
    //get the data 
    if(xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data 
        let data=JSON.parse(this.response);
        console.log(data);
    

    //a)get the countries in asian continent
    //let newarray=data.filter(country => country.region=="Asia");
    //let array2=newarray.map(obj=>obj.name);
    // console.log(array2)
    //b)for pouplation less than 2 lakhs
    //let newarray=data.filter(country => country.population<=200000);
    //let array2=newarray.map(obj=>obj.name);
    //console.log(array2)
    //c)print the name,capital,flag using foreach function
    //let array1=data.forEach(obj=>obj.name)
    //{
     //   return array1;
    //}
    // console.log(array1)
      //d)print population using reduce function
    //let total=data.reduce((previous,current) =>
    //{return previous+current.poulation},1);
    // console.log(total);
     //e)print the countries with US dollars as currency
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    let realanswer = answer.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    console.log(realanswer)
    }
}

    //4.Send the request
xhr.send();
    
/*output for 1st question
0: "Afghanistan"
1: "Armenia"
2: "Azerbaijan"
3: "Bahrain"
4: "Bangladesh"
5: "Bhutan"
6: "Brunei Darussalam"
7: "Cambodia"
8: "China"
9: "Georgia"
10: "Hong Kong"
11: "India"
12: "Indonesia"
13: "Iran (Islamic Republic of)"
14: "Iraq"
15: "Israel"
16: "Japan"
17: "Jordan"
18: "Kazakhstan"
19: "Kuwait"
20: "Kyrgyzstan"
21: "Lao People's Democratic Republic"
22: "Lebanon"
23: "Macao"
24: "Malaysia"
25: "Maldives"
26: "Mongolia"
27: "Myanmar"
28: "Nepal"
29: "Korea (Democratic People's Republic of)"
30: "Oman"
31: "Pakistan"
32: "Palestine, State of"
33: "Philippines"
34: "Qatar"
35: "Saudi Arabia"
36: "Singapore"
37: "Korea (Republic of)"
38: "Sri Lanka"
39: "Syrian Arab Republic"
40: "Taiwan"
41: "Tajikistan"
42: "Thailand"
43: "Timor-Leste"
44: "Turkey"
45: "Turkmenistan"
46: "United Arab Emirates"
47: "Uzbekistan"
48: "Viet Nam"
49: "Yemen"
*/
/*output for population less than 200000
0: "Åland Islands"
1: "American Samoa"
2: "Andorra"
3: "Anguilla"
4: "Antarctica"
5: "Antigua and Barbuda"
6: "Aruba"
7: "Bermuda"
8: "Bonaire, Sint Eustatius and Saba"
9: "Bouvet Island"
10: "British Indian Ocean Territory"
11: "United States Minor Outlying Islands"
12: "Virgin Islands (British)"
13: "Virgin Islands (U.S.)"
14: "Cayman Islands"
15: "Christmas Island"
16: "Cocos (Keeling) Islands"
17: "Cook Islands"
18: "Curaçao"
19: "Dominica"
20: "Falkland Islands (Malvinas)"
21: "Faroe Islands"
22: "French Southern Territories"
23: "Gibraltar"
24: "Greenland"
25: "Grenada"
26: "Guam"
27: "Guernsey"
28: "Heard Island and McDonald Islands"
29: "Holy See"
30: "Isle of Man"
31: "Jersey"
32: "Kiribati"
33: "Liechtenstein"
34: "Marshall Islands"
35: "Micronesia (Federated States of)"
36: "Monaco"
37: "Montserrat"
38: "Nauru"
39: "Niue"
40: "Norfolk Island"
41: "Northern Mariana Islands"
42: "Palau"
43: "Pitcairn"
44: "Saint Barthélemy"
45: "Saint Helena, Ascension and Tristan da Cunha"
46: "Saint Kitts and Nevis"
47: "Saint Lucia"
48: "Saint Martin (French part)"
49: "Saint Pierre and Miquelon"
50: "Saint Vincent and the Grenadines"
51: "Samoa"
52: "San Marino"
53: "Sao Tome and Principe"
54: "Seychelles"
55: "Sint Maarten (Dutch part)"
56: "South Georgia and the South Sandwich Islands"
57: "Svalbard and Jan Mayen"
58: "Tokelau"
59: "Tonga"
60: "Turks and Caicos Islands"
61: "Tuvalu"
62: "Wallis and Futuna"*/
/*output for US dollar currency
0: {name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
1: {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
2: {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
3: {name: 'Ecuador', topLevelDomain: Array(1), alpha2Code: 'EC', alpha3Code: 'ECU', callingCodes: Array(1), …}
4: {name: 'El Salvador', topLevelDomain: Array(1), alpha2Code: 'SV', alpha3Code: 'SLV', callingCodes: Array(1), …}
5: {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
6: {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
7: {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
8: {name: 'Puerto Rico', topLevelDomain: Array(1), alpha2Code: 'PR', alpha3Code: 'PRI', callingCodes: Array(2), …}
9: {name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
10: {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
11: {name: 'United States of America', topLevelDomain: Array(1), alpha2Code: 'US', alpha3Code: 'USA', callingCodes: Array(1), …}
length: 12*/