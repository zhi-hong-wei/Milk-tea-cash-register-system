<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="3" class="menu">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-shopping-cart-full"></i>
            <span slot="title">收银</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-home"></i>
            <span slot="title">店铺</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-coffee"></i>
            <span slot="title">商品</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-medal-1"></i>
            <span slot="title">会员</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" class="center" id="center">
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="点餐" name="first">
              <el-table :data="Atable" stripe style="width: 100%">
                <el-table-column prop="goodsName" label="名称" width="90">
                </el-table-column>
                <el-table-column prop="count" label="数量" width="90">
                </el-table-column>
                <el-table-column prop="price" label="金额" width="90">
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                  <template scope="scope">
                    <el-button size="mini" type="primary" @click="addGoods(scope.row)">增加</el-button>
                    <el-button type="danger" size="mini" @click="delGoods(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total">
                <small>数量:</small>
                {{totalCount}}
                <small>金额:</small>
                {{totalPrice}} 元
              </div>
              <div class="table-bottom">
                <el-button size="small" type="success">挂单</el-button>
                <el-button type="danger" size="small" class="around" @click="delAllGoods">删除</el-button>
                <el-button type="warning" size="small" @click="checkout">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="second">
            </el-tab-pane>
            <el-tab-pane label="外卖" name="third">
            </el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
      <el-col class="right" :span="13">
        <div class="">
          <div class="top">常用商品</div>
          <div class="right-top">
            <div class="individual" v-for="item in oftenGoods" @click="addGoods(item)">
              <span>{{item.goodsName}}</span>
              <span class="item-price">￥{{item.price}}元</span>
            </div>
          </div>
          <el-tabs class="right-bottom">
            <el-tab-pane label="热饮">
              <div class="right-type">
                <div v-for="item in typeGoods.type0Goods" class="type-item" @click="addGoods(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="item-price">￥{{item.price}}元</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="冷饮">
              <div class="right-type">
                <div v-for="item in typeGoods.type1Goods" class="type-item" @click="addGoods(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="item-price">￥{{item.price}}元</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div class="right-type">
                <div v-for="item in typeGoods.type2Goods" class="type-item" @click="addGoods(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="item-price">￥{{item.price}}元</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div class="right-type">
                <div v-for="item in typeGoods.type3Goods" class="type-item" @click="addGoods(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="item-price">￥{{item.price}}元</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  import mock from '../mock.js'

  export default {
    name: "Pos",
    components: {},
    data() {
      return {
        activeName: 'first',
        Atable: [],
        oftenGoods: [],
        typeGoods: {
          type0Goods: [],
          type1Goods: [],
          type2Goods: [],
          type3Goods: [],
        },
        totalCount: 0,
        totalPrice: 0
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addGoods(goods) {
        let Hashgoods = false
        let num = 0;
        for (let i = 0; i < this.Atable.length; i++) {
          if (this.Atable[i].goodsId == goods.goodsId) {
            Hashgoods = true
            num = i
          }
        }

        if (Hashgoods) {
          this.Atable[num].count++
          this.Atable[num].price = this.Atable[num].count * this.Atable[num].price
        } else {
          let NewArr = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1}
          this.Atable.push(NewArr)
        }
        this.getAllMoney()
      },
      delGoods(goods) {
        this.Atable = this.Atable.filter(res =>
          res.goodsId != goods.goodsId
        );
        this.getAllMoney();
      },
      delAllGoods() {
        this.Atable = [];
        this.totalCount = 0;
        this.totalPrice = 0;
      },
      getAllMoney() {
        this.totalCount = 0;
        this.totalPrice = 0;
        if (this.Atable) {
          //计算汇总金额和数量
          this.Atable.forEach((element) => {
            this.totalCount += element.count;
            this.totalPrice += element.price * element.count;
          })
        }
      },
      checkout() {
        if (this.totalCount != 0) {
          this.Atable = [];
          this.totalCount = 0;
          this.totalPrice = 0;
          this.$message({
            message: '结账成功，感谢你又为店里出了一份力',
            type: 'success'
          })
        } else {
          this.$message.error('不能空结');
        }
      },
    },
    created() {
      axios.post("/commonGoods").then(res => {
        // console.log(res)
        this.oftenGoods = res.data
      })
      axios.post("/typeGoods").then(res => {
        console.log(res)
        this.typeGoods.type0Goods = res.data[0]
        this.typeGoods.type1Goods = res.data[1]
        this.typeGoods.type2Goods = res.data[2]
        this.typeGoods.type3Goods = res.data[3]
      })
    }
  }
</script>

<style>
  .el-menu-vertical-demo {
    height: 100%;
  }

  .center {
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .nav {
    height: 100%;
  }

  .tac {
    height: 100%;
  }

  .menu {
    height: 100%;
  }

  .right {
    background-color: #f1f1f1;
    height: 100%;
  }

  .right .top {
    height: 40px;
    line-height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    background-color: #dedff2;
    padding-left: 10px;
  }

  .right-bottom {
    padding-left: 10px;
  }

  .right-top {
    height: 260px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .individual {
    width: 140px;
    height: 30px;
    background-color: white;
    margin: 10px 10px 0 25px;
    line-height: 30px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
  }

  .item-price {
    color: blueviolet;
  }

  .right-type {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .type-item {
    cursor: pointer;
    width: 140px;
    height: 30px;
    background-color: white;
    margin: 10px 10px 0 18px;
    line-height: 30px;
    padding: 10px;
    border-radius: 8px;
  }

  .total {
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 10px;
  }

  .total small {
    margin: 0 6px 0 20px;
    color: gray;
  }

  .table-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .table-bottom .around {
    margin: 0 25px;
  }
</style>
