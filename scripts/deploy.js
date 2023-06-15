const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "Aadithya"
  const SYMBOL = "TM"

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("nftmint")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "Anirudh concert",
      cost: tokens(3),
      tickets: 0,

      maxtickets: 0,
      date: "May 31",
      time: "6:00PM",
      location: "Chennai"
    },
    {
      name: "JordIndia Show",
      cost: tokens(1),
      tickets: 0,
      maxtickets: 125,
      date: "Jun 2",
      time: "1:00PM",
      location: "Mumbai"
    },
    {
      name: "Arjit singh concert",
      cost: tokens(0.25),
      tickets: 0,
      maxtickets:200,
      date: "Jun 9",
      time: "10:00AM",
      location: "Delhi"
    },
    {
      name: "A Chat with Bollywood stars",
      cost: tokens(5),
      tickets: 0,
      maxtickets: 0,
      date: "Jun 11",
      time: "2:30PM",
      location: "Mumbai"
    },
    {
      name: "'lets talk about AI' with Varun Mayya",
      cost: tokens(1.5),
      tickets: 125,
      maxtickets: 0,
      date: "Jun 23",
      time: "11:00AM",
      location: "Bangalore"
    }
  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].maxtickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,

    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});