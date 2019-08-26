<header><title>Notes on blockchains</title></header>

# Notes on blockchains

Many articles focus on Bitcoin’s implications (low fees, volatility, intersection with criminality) or mechanics (mining, wallets) without focusing on why the underlying blockchain technology is interesting. If they mention its unique features like decentralisation, they don’t do much to explain why decentralisation is superior to centralisation.

Because I spend a lot of time working with centralised, major institutions and see how they approach problems, I was initially left wondering how blockchains offer much additional value. When I heard of auto-executing smart contracts that would transfer funds on completion of some real-world task, I wondered why a bank or law firm couldn’t just implement a similar, centralised platform to achieve that goal.

Marc Andreessen’s [article](https://dealbook.nytimes.com/2014/01/21/why-bitcoin-matters/) was the first I read that emphasised the value of decentralisation and the blockchain model for operating with _untrusted counterparties_ across _untrusted networks_.

> The practical consequence of solving this problem is that Bitcoin gives us, for the first time, a way for one Internet user to transfer a unique piece of digital property to another Internet user, such that the transfer is guaranteed to be safe and secure, everyone knows that the transfer has taken place, and nobody can challenge the legitimacy of the transfer. The consequences of this breakthrough are hard to overstate.

It might be possible to implement a similar centralised platform for contract-as-code execution, but you need to trust all the participants within it, and in particular, have a feasible mechanism for them to all access it. That is hard to create in practice.

Around the same time, I read about work to use a blockchain to track food during shipping, as a safety measure to assist in tracing food-borne disease outbreaks. This is a good illustration of the previous point: while you could create a shipping platform where all suppliers and transporters log in to update movements, it might be difficult to give so many parties reliable access to that single platform. It also illustrates another point: how a blockchain can be used to create a _digital representation of a physical item_ that is both rivalrous (if I own it, you cannot own it too) and excludable (if you don’t own it, you can be prevented from using it).

To map out exactly how this works: our goal is to record every movement of a mango from the farm through a supply chain to a supermarket.
- We first create a _token_ that represents the mango and allocate it to the farmer. 
- When the farmer transfers the physical mango to a trucker, she conducts a simultaneous blockchain transaction that transfers the token to the trucker. Now the trucker owns the mango, and can repeat this process with the wholesaler, who can in turn repeat the process with the supermarket. 
- None of these parties require access to a central platform, just the ability to conduct transactions on the same blockchain. It’s quite easy to make blockchain wallet addresses available from the physical world via QR codes.
- The blockchain layer takes care of guaranteeing that only one person holds the mango token at a time, and creates an immutable record of every transfer, which we can later use to trace the journey if the mango is infectious. 

How might this go wrong? At the moment we’re relying on each ‘transmitter’ correctly doing the physical and blocktrain transfers at the same time. This is open to fraud; the trucker could eat the mango but make the blockchain transaction claiming he offloaded it to the wholesaler. There are at least two solutions to this. _Multi-signature wallets_ require more than one person to agree on a transaction before it proceeds. (In a 2-of-3 model, two signatures are required of three people with access. In routine cases, the two are the buyer and seller. But if something goes wrong, a third-party arbitrator can decide which party is correct.)

To increase the likelihood that the parties only attempt honest transactions, we can directly connect their payment to successful blockchain transfers of the mango token. This is where a _smart contract_ might come in. When the mango token is transferred, a smart contract could automatically make a separate blockchain transfer, with monetary value like Bitcoin or Ether. To avoid smart contracts being vulnerable to the exact same centralised vulnerabilities that we are trying to avoid (i.e. someone could hack the smart contract to commit fraud), they are also committed to a blockchain with _immutable code_.

Lastly, I mentioned the complexity of setting up a centralised platform and getting many parties onboard for each use case. That’s at least partly true as well if you had to set up a separate blockchain infrastructure for every use case. To assist with that, a platform like Ethereum allows individuals and companies to create their own tokens for specialised use, on top of an underlying blockchain platform.