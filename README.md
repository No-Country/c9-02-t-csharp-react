


![App Screenshot](https://iili.io/HMmuk2S.jpg)


# 🌕 MoonBank 

Home banking app, in order to carry out different banking operations.

# 💡 Requirements

🔑	The user will be able to log in by entering their email and password.

👤	Once logged in, the user will be able to view their balance and their last transactions performed… They will also be able to perform new transactions (Deposit, Service Payment, Transfer, Exchange of Points por Rewards).

🔌	The user will be able to earn points for each service payment made (50 points).

💸	The user will be able to earn points for each transfer made (100 points).

------------


•	The user will be able to deposit funds to themselves from an external account, which can be done through a cashier (Cash), Paypal, or the Binance exchange.

In this case, when making a deposit into their MoonBank account, the user will need to provide the following details:

    o	typeTransaction: If it is a deposit, it will be zero (“0”).
    o	typeDeposit: It can be “0” if it is a cash deposit via a cashier, “1” if it is through Paypal, and “2” if it is through Binance.
    o	amount: Amount to be deposited.
    o	Cbu_cvu: CBU or CVU of the account to which the transfer is to be made.
    o	alias: Alias of the account to which the transfer is to be made.


•	The user will be able to make service payments.

A list of available services and their respective amounts will be displayed to the user.

When making a service payment, the user will need to provide the following details:

    o	TypeTransaction: If it is a service payment, it will be one (“1”).
    o	DestinationAccountCBU_CVU: CBU or CVU of the user’s own account.
    o	IdService: ID of the service to be paid, which will already have its amount.


•	The user will be able to make transfers between accounts within the same bank.

When making a transfer, the user will need to provide the following details:

    o	TypeTransaction: If it is a transfer, it will be two (“2”).
    o	Amount: Amount to transfer.
    o	IdSourceAccount: ID of the user’s own account.
    o	CBU_CVU: CBU or CVU of the account to which the transfer is to be made.
    o	Alias: Alias of the account to which the transfer is to be made.


•	The user will be able to exchange rewards for points.

A list of available rewards and their respective point values will be displayed to the user.

When making a reward exchange, the user will need to provide the following details:

    o	TypeTransaction: If it is a reward exchange, it will be three (“3”).
    o	DestinationAccountAlias: Alias of the user’s own account.
    o	IdReward: ID of the reward to be exchanged, which will already have its point value.

## 🛠️ Built With

**⚙️ Backend:** 

    o	.NET
    o	C#
    o	Entity Framework
    o	Data Annotations
    o	Web API
    o	BBDD SQL Server (Code First)
    o	LINQ
    o	Swagger
    o	Somee (Deploy)


**💻 Frontend**

    o	Vite.js
    o	React.js con Typescript
    o	React-idle-timer
    o	React-testing-library
    o	SASS
    o	JEST
    o	Redux Toolkit
    o	StoryBook
    o	Chromatic
    o	Styled Components
    o	Axios


**☁️ Server** 

    o       Microsoft SQL Server


**🎭 UI/UX**

    o	Figma


**💬 Communication**

    o	Slack
    o	Discord
    o	Trello

**🧪 Testing**

    o	Postman


# 🤝 Contributors


**👨‍💼👨‍💻 Project Manager and Backend Developer**

![Luciano Fernandez](https://iili.io/HV3aByu.jpg)

**Luciano Fernández**
[![GitHub Icon](https://icons.iconarchive.com/icons/pictogrammers/material/48/github-icon.png)](https://github.com/FZ-developer) 
[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/fz-developer) 

+
+
+

**🎨👨‍💻 UI/UX and Frontend Developer**

![Carlos Sorto](https://iili.io/HMae9Yx.jpg)

**Carlos Sorto**
[![GitHub Icon](https://icons.iconarchive.com/icons/pictogrammers/material/48/github-icon.png)](https://github.com/SortOmega) 
[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/sortomega) 

+
+
+


**👨‍💻 Backend Developer**

![Emanuel Barile](https://iili.io/HMae3hP.jpg)

**Emanuel Barile**
[![GitHub Icon](https://icons.iconarchive.com/icons/pictogrammers/material/48/github-icon.png)](https://github.com/EmanuelBarile) 
[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/emanuel-barile) 

+
+
+

**👩‍💻 Frontend Developer**

![Kelly Chara](https://iili.io/HMaeJpV.jpg)

**Kelly Chara**
[![GitHub Icon](https://icons.iconarchive.com/icons/pictogrammers/material/48/github-icon.png)](https://github.com/kelly1801) 
[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/kelly-chara) 

+
+
+

**👨‍💻 Frontend Developer**

![Luis Mera](https://iili.io/HMae2TB.jpg)

**Luis Mera**
[![GitHub Icon](https://icons.iconarchive.com/icons/pictogrammers/material/48/github-icon.png)](https://github.com/luismera86) 
[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/luis-mera-developer) 

+
+
+


**🧪 Tester**

![Sergio Tejada Dueñas](https://iili.io/HMamb2f.jpg)

**Sergio Tejada Dueñas**

[![LinkedIn Icon](https://icons.iconarchive.com/icons/limav/flat-gradient-social/48/Linkedin-icon.png)](https://www.linkedin.com/in/sergio-alonso-tejada-duenas) 
