<template>
    <a-layout class="layout">
        <a-layout-content :style="{ background: '#fff'}">
            <a-row>
                <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
                    <a-card
                            class="cards_list"
                            style="margin-bottom: 24px;"
                            :bordered="false"
                            title="Cards"
                            :head-style="{borderBottom:'none'}"
                    >
                        <a slot="extra" class="extra">View all cards</a>
                        <div>
                            <a-list
                                    rowKey="id"
                                    :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
                                    :dataSource="dataSource"
                            >
                                <a-list-item slot="renderItem" slot-scope="item,index">
                                    <template v-if="item.carId">
                                        <a-card
                                                :hoverable="true"
                                                class="cards_content"
                                                :style="{background:index%2==0?dataColor[0]:dataColor[1] }"
                                        >
                                            <div class="cards_info">
                                                <span class="title">Available balance</span>
                                                <div class="price">{{item.price}}</div>
                                                <span
                                                        class="carId"
                                                >{{item.carId.replace(/\s/g,'').replace(/(\d{4})\d+(\d{2})$/, "**** **** **** $2")}}</span>
                                                <div class="type">Monzo</div>
                                            </div>
                                        </a-card>
                                    </template>
                                    <template v-else>
                                        <a-card :hoverable="true" class="add_car">
                                            <div class="add_btn">
                                                <a-icon type="plus-circle" class="add_btn_icon"/>
                                                <div class="add_btn_text">Add New Card</div>
                                            </div>
                                        </a-card>
                                    </template>
                                </a-list-item>
                            </a-list>
                        </div>
                    </a-card>
                    <a-row :gutter="24">
                        <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                            <a-card
                                    class="main-services-list"
                                    style="margin-bottom: 24px;"
                                    :bordered="false"
                                    title="Main Services"
                                    :head-style="{borderBottom:'none'}"
                            >
                                <a slot="extra" class="extra">View all</a>
                                <div>
                                    <a-list
                                            rowKey="name"
                                            :grid="{gutter: 24, lg: 2, md: 2, sm: 1, xs: 1}"
                                            :dataSource="MainServicesData"
                                    >
                                        <a-list-item slot="renderItem" slot-scope="item">
                                            <a-card :hoverable="true" class="main_content">
                                                <div class="main_info">
                                                    <img class="main_icon" :src="item.imgUrl" :alt="item.name">
                                                    <span class="main_text">{{item.name}}</span>
                                                </div>
                                            </a-card>
                                        </a-list-item>
                                    </a-list>
                                </div>
                            </a-card>
                        </a-col>
                        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
                            <a-card
                                    class="card-info-list"
                                    :bordered="false"
                                    title="Current"
                                    :body-style="{padding:'0 0 0 24px'}"
                                    :head-style="{borderBottom:'none'}"
                            >
                                <a slot="extra" class="extra">View all</a>
                                <ul class="current_list">
                                    <li v-for="(item, index) in currentData" :key="index">
                                        <span class="carId">{{item.carId}}</span>
                                        <div class="dashed_line"/>
                                        <span class="price">{{item.price}}</span>
                                    </li>
                                </ul>
                            </a-card>
                            <a-card
                                    class="card-info-list"
                                    style="margin-bottom: 24px;"
                                    :bordered="false"
                                    title="Savings"
                                    :body-style="{padding:'0 0 0 24px'}"
                                    :head-style="{borderBottom:'none'}"
                            >
                                <a slot="extra" class="extra">View all</a>
                                <a-row :gutter="24">
                                    <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
                                        <div>
                                            <ve-line
                                                    :data="chartData"
                                                    :legend="legend"
                                                    :settings="settings"
                                                    :grid="grid"
                                                    height="280px"
                                            ></ve-line>
                                        </div>
                                    </a-col>
                                    <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                                        <ul class="line_info">
                                            <li>
                                                <span>Total</span>
                                                <span class="weight_text">$100.09</span>
                                            </li>
                                            <li>
                                                <span>This week</span>
                                                <span class="weight_text">$2567.89</span>
                                            </li>
                                            <li>
                                                <span>This month</span>
                                                <span class="weight_text">$140.98</span>
                                            </li>
                                        </ul>
                                    </a-col>
                                </a-row>
                            </a-card>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="right">
                        <div class="right_header">
                            <a-badge dot>
                                <a-icon type="bell" class="bell"/>
                            </a-badge>
                            <div class="user_info">
                                <span class="user_name">Admin</span>
                                <a-avatar
                                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                                />
                            </div>
                        </div>
                        <div class="right_ring">
                            <ve-ring :data="chartRingData" :title="ringTitle" height="315px" :legend="legend"></ve-ring>
                        </div>
                        <div class="right_content">
                            <div class="right_content_header">
                                <span>Transactions</span>
                                <a-dropdown>
                  <span class="ant-dropdown-link" @click="e => e.preventDefault()">Toady
                    <a-icon type="down"/>
                  </span>
                                    <a-menu slot="overlay">
                                        <a-menu-item>
                                            <a href="javascript:;">Toady</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a href="javascript:;">Toady</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a href="javascript:;">Toady</a>
                                        </a-menu-item>
                                    </a-menu>
                                </a-dropdown>
                            </div>
                            <ul class="right_content_body">
                                <li v-for="(item, index) in TransactionsData" :key="index">
                                    <div class="title">
                                        <img :src="item.imgUrl" :alt="item.name">
                                        <span class="name weight_text">{{item.name}}</span>
                                    </div>
                                    <span
                                            class="weight_text"
                                            :style="{color:item.num.indexOf('-')>-1?'#52c41a':'#f50'}"
                                    >{{item.num}}</span>
                                </li>
                            </ul>
                            <div class="right_footer">
                                <div class="next_Btn">
                                    <span>Transfer Money</span>
                                    <img src="./../assets/pre.png" alt>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <div class="message">
                <img src="./../assets/msg.png" alt>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    const dataSource = [
        { carId: "1063873637834", price: "$2,200" },
        { carId: "1063874537867", price: "$1,300.89" }
    ];
    dataSource.push({});
    const color = ["#fe4d55", "#0f819b"];
    const currentData = [
        { carId: "1063873637834", price: "$2,200" },
        { carId: "1063874537867", price: "$1,300.89" },
        { carId: "1063879909887", price: "$1,843.11" }
    ];

    import VeLine from "v-charts/lib/line.common";
    import VeRing from "v-charts/lib/ring.common";
    import transactions from "./../assets/transactions.png";
    import utility from "./../assets/utility.png";
    import loans from "./../assets/loans.png";
    import deposits from "./../assets/deposits.png";
    import transfer from "./../assets/transfer.png";
    import exchange from "./../assets/exchange.png";
    import right1 from "./../assets/right1.png";
    import right2 from "./../assets/right2.png";
    import right3 from "./../assets/right3.png";

    export default {
        name: "Home",
        components: { VeLine, VeRing },
        data() {
            return {
                dataSource,
                MainServicesData: [
                    { name: "Transactions", imgUrl: transactions },
                    { name: "Utility", imgUrl: utility },
                    { name: "Loans", imgUrl: loans },
                    { name: "Deposits", imgUrl: deposits },
                    { name: "Fast transfer", imgUrl: transfer },
                    { name: "Exchange", imgUrl: exchange }
                ],
                dataColor: color,
                currentData,
                chartData: {
                    columns: ["x", "y"],
                    rows: [
                        { x: "$10", y: 0.25 },
                        { x: "$20", y: 0.1 },
                        { x: "$30", y: 0.65 },
                        { x: "$40", y: 0.27 },
                        { x: "$50", y: 0.92 }
                    ]
                },
                legend: [],
                settings: {
                    yAxisType: ["1%"]
                },
                grid: { top: 20 },
                chartRingData: {
                    columns: ["scale", "num"],
                    rows: [
                        { scale: "1/1", num: 1393 },
                        { scale: "1/2", num: 3530 },
                        { scale: "1/3", num: 2923 },
                        { scale: "1/4", num: 1723 },
                        { scale: "1/5", num: 3792 },
                        { scale: "1/6", num: 4593 }
                    ]
                },
                ringTitle: {
                    text: "$5,349",
                    subtext: "Balance",
                    x: "42.5%",
                    y: "60%"
                },
                TransactionsData: [
                    { name: "Dribbble Pro Plan", imgUrl: right1, num: "-$100" },
                    { name: "Adidas Refund", imgUrl: right2, num: "+$250" },
                    { name: "Wacom LCD", imgUrl: right3, num: "-$3000" }
                ]
            };
        }
    };
</script>

<style scoped>
    .extra {
        color: rgba(0, 0, 0, 0.45);
    }

    .cards_content {
        border-radius: 16px;
    }

    .add_car {
        border: none;
        background: rgba(225, 225, 225, 0.45);
        border-radius: 16px;
    }

    .cards_info .title {
        font-size: 0.7rem;
        color: rgba(0, 0, 0, 0.65);
    }

    .cards_info .price {
        font-size: 0.8rem;
        color: #FFFFFF;
    }

    .cards_info .carId {
        font-size: 0.85rem;
        color: rgba(0, 0, 0, 0.65);
        padding: 1.2rem 0 0.8rem;
        display: inline-block;
        letter-spacing: 0.1rem;
    }

    .cards_info .type {
        font-size: 1rem;
        color: #FFFFFF;
    }

    .add_btn {
        height: 115.33px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .add_btn .add_btn_icon {
        font-size: 2.6rem;
        color: rgba(0, 0, 0, 0.35);
    }

    .add_btn .add_btn_text {
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.35);
        padding-top: 8px;
    }

    .main_content {
        border: none;
        border-radius: 24px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
    }

    .main_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main_info .main_icon {
        width: 36px;
    }

    .main_info .main_text {
        font-size: 0.8rem;
        white-space: nowrap;
        padding-top: 10px;
        color: rgba(0, 0, 0, 0.85);
    }

    .current_list {
        list-style: none;
        padding: 0;
    }

    .current_list li {
        display: flex;
        align-items: baseline;
        height: 24px;
    }

    .current_list li .carId {
        color: rgba(0, 0, 0, 0.45);
    }

    .current_list li .price {
        display: inline-block;
        width: 120px;
        text-align: right;
        color: rgba(0, 0, 0, 0.85);
    }

    .current_list li .dashed_line {
        background: none;
        border: dashed #e8e8e8;
        border-width: 1px 0 0;
        width: 100%;
        margin-left: 20px;
    }

    .line_info {
        list-style: none;
        padding: 0;
        margin-top: 10px;
    }

    .line_info li {
        display: flex;
        justify-content: space-between;
        line-height: 28px;
    }

    .weight_text {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
    }

    .right {
        height: 100%;
        margin-top: -66px;
        margin-left: 24px;
        padding: 24px;
        border-radius: 24px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
    }

    .right_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .right_header .bell {
        color: rgba(0, 0, 0, 0.45);
        font-size: 24px;
    }

    .right_header .user_info {
        margin-right: 24px;
    }

    .right_header .user_info .user_name {
        padding-right: 10px;
    }

    .right_content_header {
        display: flex;
        justify-content: space-between;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.45);
    }

    .right_content_body {
        list-style: none;
    }

    .right_content_body li {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .right_content_body li .title img {
        width: 32px;
    }

    .right_content_body li .title .name {
        padding-left: 10px;
    }

    .right_footer {
        display: flex;
        justify-content: center;
        margin-top: 5%;
    }

    .right_footer .next_Btn {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 24px;
        background: #fe4d55;
        border-radius: 24px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
    }

    .right_footer .next_Btn span {
        color: #FFFFFF;
    }

    .message {
        cursor: pointer;
        background: #009688;
        position: fixed;
        bottom: 2%;
        right: 2%;
        padding: 12px;
        border-radius: 50%;
    }
    .message img {
        width: 32px;
    }

    @media screen and (max-width: 480px) {
        .right {
            margin-top: 12px;
        }
    }
</style>
