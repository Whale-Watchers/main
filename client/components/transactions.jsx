import React, { Component } from 'react';

class Transactions extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data : null
        }
    }
    componentDidMount(){
      console.log('component mounted')
      fetch('http://localhost:3000/database/getTransactions/0x3b417faee9d2ff636701100891dc2755b5321cc3')
      .then(res => res.json())
      .then(res => {
        
        //console.log('transactions-->', );
        this.setState({data : res})
      })
      .catch(err => console.log("ERROR:", err))
    }

    render() {
      //var nftSorted = [];
      console.log('state', this.state)
      let sample = <p>hello</p>
      const nftprices = [
            {
              "name" : "CryptoPunks",
              "price"	: "48.24",
              "contractAdress": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FBdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE%3Ds10000?fit=max&h=120&w=120&auto=format&s=5eab9dfe19106ac590e683947112951b"
            },
            {
              "name" : "Bored Ape Yacht Club",
              "price"	: "83.00",
              "contractAdress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FJu9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB%3Ds10000?fit=max&h=120&w=120&auto=format&s=9719c84d198704a4b1bf7519f6f52256"
            },
            {
              "name" : "Mutant Ape Yacht Club",
              "price"	: "16.59",
              "contractAdress" : "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FlHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI%3Ds10000?fit=max&h=120&w=120&auto=format&s=d21114ca201b6479e28180b672436109"
          },
          {
              "name" : "Art Blocks",
              "price"	: "73.00",
              "contractAdress" : "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
              "tokenImage": "https://lh3.googleusercontent.com/1yWU9TTxsdpsdCGCHlHJ3BIfVgaQXFUZZCLimWSnQPC_SEokZgZGT6SksC5UibBJZrnnvQmr1zVQWFCSb3wL7s_l97wf2zPstC3XNA=w600"
          },
          {
              "name" : "Otherdeed",
              "price"	: "2.12",
              "contractAdress" : "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FyIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI%3Ds10000?fit=max&h=120&w=120&auto=format&s=0fa52b2d635edc28ef61b2b3e3b99a59"
          },
          {
              "name" : "Azuki",
              "price"	: "9.00",
              "contractAdress" : "0xed5af388653567af2f388e6224dc7c4b3241c544",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FH8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT%3Ds10000?fit=max&h=120&w=120&auto=format&s=7d8fc062f8834bfbce4aec4ff328f996"
          },
          {
              "name" : "CloneX",
              "price"	: "8.55",
              "contractAdress" : "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FXN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg%3Ds10000?fit=max&h=120&w=120&auto=format&s=8319b6661311648a1193925c079fb6ef"
          },
          {
              "name" : "VeeFriends",
              "price"	: "6.29",
              "contractAdress": "0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb",
              "tokenImage": "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s168"
          },
          {
              "name" : "Moonbirds",
              "price"	: "18.50",
              "contractAdress" : "0x23581767a106ae21c074b2276d25e5c3e136a68b",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FH-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75%3Ds10000?fit=max&h=120&w=120&auto=format&s=30f910b04fda1685d06e40aebce47db8"
          },
          {
              "name" : "Meebits",
              "price"	: "3.45",
              "contractAdress" : "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2Fd784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0%3Ds10000?fit=max&h=120&w=120&auto=format&s=bae231b6301817a38ace71bc2b64b81e"
          },
          {
              "name" : "Doodles",
              "price"	: "9.90",
              "contractAdress" : "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2F7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ%3Ds10000?fit=max&h=120&w=120&auto=format&s=65b159799dcff448deaf9106b1ead13e"
          },
          {
              "name" : "Cool Cats",
              "price"	: "3.29",
              "contractAdress" : "0x1a92f7381b9f03921564a437210bb9396471050c",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FLIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8%3Ds10000?fit=max&h=120&w=120&auto=format&s=2c14b63bf3c552b0a0d2e1caf6367e08"
          },
          {
              "name" : "Bored Ape Kennel Club",
              "price"	: "5.60",
              "contractAdress" : "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2Fl1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1%3Ds10000?fit=max&h=120&w=120&auto=format&s=9d6e3b7dec9c72aaabf83a13e698cc4a"
          },
          {
              "name" : "Loot",
              "price"	: "0.76",
              "contractAdress" : "0x7b3d36eb606f873a75a6ab68f8c999848b04f935",
              "tokenImage": "https://lh3.googleusercontent.com/g-NFUWjS4IGgym8PHBxyhg5-G_B4x-IHgPKRkxo00JQFE3LOd-95yU2uhrokITVmV7KHEav6OMfAhfJ4roC5hwP-0tI9dMRd9wQLdw=s168"
          },
          {
              "name" : "World Of Women",
              "price"	: "3.12",
              "contractAdress" : "0xe785e82358879f061bc3dcac6f0444462d4b5330",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FEFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F%3Ds10000?fit=max&h=120&w=120&auto=format&s=9c69a63a4c795e42d84e0a70f026847b"
          },
          {
              "name" : "Cryptoadz",
              "price"	: "1.68",
              "contractAdress": "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6",
              "tokenImage": "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FiofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo%3Ds10000?fit=max&h=120&w=120&auto=format&s=ff2900e7a1682f22ab0e57992b0223bf"
          }
        ];
        if(this.state.data !== null){
          const transactions = [];
          this.state.data.forEach(element=> {
            let result;
            nftprices.forEach(prices => {
              if(element.contractAddress === prices.contractAdress) return result = element
            });
            if(result) return transactions.push(result);
            //return result;
          });
          console.log('filtered transactions-->',transactions)
          sample = this.state.data.map(transactions => {
           return <p>{transactions.timeStamp}</p>
          })
          console.log(sample)
        }
        return (
            <div id="transactionsContainer">
                <h3>Transactions</h3>
                <div id='tableHeadingsWrapper'>
                    <h5 className="tableHeading">Date</h5>
                    <h5 className="tableHeading">Name of Token</h5>
                    <h5 className="tableHeading">Buy/Sell</h5>
                    {/* <h5 className="tableHeading">City</h5> */}
                </div>
                <div>
                    {sample}
                </div>
            </div>
        );
    }
}
/*
"database/getTransactions/:address"
filter for the top coins from the NFT JSON file
//BUY OR SELL
//NAME OF THE NFT OR TOKEN
//DATE
//IF
//ele.timeStamp
//ele.to BUY
//ele.from


*/

export default Transactions;