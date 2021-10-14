<template>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col">
        <div class="container-fluid container-lg">
          <div id="History" class="row">
            <div class="col-12 col-md-6 order-md-1 drafts">
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_1.jpg"
                  alt="First draft of our NFT"
                />
              </div>
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_2.jpg"
                  alt="First draft of our NFT"
                />
              </div>
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_3.jpg"
                  alt="First draft of our NFT"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <h2>Your <span>poops</span>, our history</h2>
              <p>
                In a perfect world, we could imagine that even our poop reflects
                our emotions and the trends of the moment. Cute or monstrous,
                our poop remains our own creation, a reflection of our health
                and even our mental state. It's always a personal satisfaction
                to see that our poop has been well designed. After reading this,
                will you look at your poop the same way? Don't deny your poop,
                don't flush it until you see what it looks like, don't be in
                denial, join the CutePoopNFT adventure.
              </p>
              <nuxt-link v-if="hereComeTheTime" :to="'/mint'">
                <button class="cta">Mint your own poop</button>
              </nuxt-link>
            </div>
          </div>
          <div id="Roadmap" class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <h2>Our <span>Digestive system</span></h2>
                </div>
              </div>
              <div class="row milestone">
                <div class="offset-md-5 col-12 col-sm-3 col-md-2 divider">
                  <p>1</p>
                </div>
                <div class="col-12 col-sm-9 col-md-5 text">
                  <h4>Start drawing and brainstorming aroundCutePoop</h4>
                  <p>
                    We have all drawn a poop at least once in our lives, but in
                    the CutePoopNFT project it's all about sublimating the poop
                    and dressing it up with a hat, glasses, an accessory or an
                    insect to keep it company. All this will make your poo
                    unique. So it takes time and we need some inspiration.
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="col-12 col-sm-3 col-md-2 order-md-2 divider">
                  <p>2</p>
                </div>
                <div class="col-12 col-sm-9 col-md-5 text">
                  <h4>Create a script to assembled randomly all CutePoops</h4>
                  <p>
                    Even at the bottom of the toilet an artist still needs to be
                    supported by a developer in the CutePoopNFT project they are
                    2, a junior and a senior work hand in hand to deliver you a
                    quality script for a successful assembly of pretty poop.
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="offset-md-5 col-12 col-sm-3 col-md-2 divider">
                  <p>3</p>
                </div>
                <div class="col-12 col-sm-9 col-md-4 text">
                  <h4>Create a Dapp for minting on ethereum blockchain</h4>
                  <p>
                    This is the visible part of the iceberg, here too the work
                    must be meticulous, to offer you a quality user experience.
                    We have done everything possible to ensure that our poop is
                    pleasant to look at while sparing you any uncomfortable
                    smell!
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="col-12 col-sm-3 col-md-2 order-md-2 divider">
                  <p>4</p>
                </div>
                <div class="col-12 col-sm-9 col-md-5 text">
                  <h4>Prepare some special CutePoops for twitter giveaway</h4>
                  <p>
                    The project artist is preparing a selection of impressive
                    poop for you. These droppings will only be available during
                    a contest and will not be available for mint. The date will
                    be announced on our twitter page. Stay tuned so you don't
                    miss this unique event!
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="offset-md-5 col-12 col-sm-3 col-md-2 divider">
                  <p>5</p>
                </div>
                <div class="col-12 col-sm-9 col-md-4 text">
                  <h4>Our mint live on October 22th</h4>
                  <p>
                    Remember this date well, this day will go down in history,
                    never have poop had so much visibility. Long ignored and
                    hated, how many of you flush the toilet without even looking
                    at your poop... This time is over. Make way for the show. Be
                    ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="Attributes" class="row">
            <div class="offset-1 col-10 order-lg-1 offset-lg-0 col-lg-7">
              <div class="row">
                <div class="col gallery">
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop4.jpg"
                    alt="Some poop of the first collection"
                  />
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop5.jpg"
                    alt="Some poop of the first collection"
                  />
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop6.jpg"
                    alt="Some poop of the first collection"
                  />
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop7.jpg"
                    alt="Some poop of the first collection"
                  />
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop8.jpg"
                    alt="Some poop of the first collection"
                  />
                  <img
                    class="img-fluid"
                    src="~/assets/images/card-poop9.jpg"
                    alt="Some poop of the first collection"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              <h2>Over <span>10000</span> differents possibilities</h2>
              <p>
                Our designer worked on over 125 drawings, that give us over 5kk
                unique possibilities, and we select just 10,000.
              </p>
              <p>
                We have 6 differents layers with a miminum of 12 possibilities
                in.
              </p>
              <p>
                We use a generator script that assembling each layer with a
                rarity score on each drawing. Each CutePoop is unique and some
                of this a more rarible (based on this traits) than other.
              </p>
              <p>
                We also generating and design some other unique and specifics
                CutePoop for airdroped to our community (Or maybe you who read
                this) !
              </p>
              <nuxt-link v-if="hereComeTheTime" :to="'/mint'">
                <button class="cta">Mint your own poop</button>
              </nuxt-link>
            </div>
          </div>
          <div id="Team" class="row">
            <div class="col">
              <div class="row align-items-end mb-4">
                <div class="col-12 col-lg-4">
                  <h2>Oh what a <span>poop gang</span></h2>
                </div>
                <div class="col-12 col-lg-6">
                  <p>
                    Yes ! Is a team behind this project ! We are three friends,
                    blockchains and crypto enthousiams. Each of us have is
                    speciality, designer, developer, communication... We hare
                    glad to presents you our poops ! Yes it's a joke at the
                    beginning, but what a joke ! (PS: we don't use our real
                    name, but if you want, with some reseach you can find us !)
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md member">
                  <img
                    class="img-fluid"
                    src="~/assets/images/poop-team3.png"
                    alt="Our designer"
                  />
                  <h4>Mouz Al Rallaoui II</h4>
                  <p>Pro poop designer from father to son</p>
                </div>
                <div class="col-12 col-md member">
                  <img
                    class="img-fluid"
                    src="~/assets/images/poop-team1.png"
                    alt="Our designer"
                  />
                  <h4>Gavin Skalv</h4>
                  <p>Development pro pooper</p>
                </div>
                <div class="col-12 col-md member">
                  <img
                    class="img-fluid"
                    src="~/assets/images/poop-team2.png"
                    alt="Our designer"
                  />
                  <h4>Beniamin Axurit</h4>
                  <p>Director of poop communication</p>
                </div>
              </div>
            </div>
          </div>
          <div id="FAQ" class="row">
            <div class="col">
              <h2 class="mb-4">Question <span>in poop</span></h2>
              <div class="accordion questions" role="tablist">
                <b-card no-body class="question">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle.question-1 block>
                      <p>What is the release date ?</p>
                      <span>+</span>
                    </b-button>
                  </b-card-header>

                  <b-collapse id="question-1" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        October 12th at 12PM PST, 3PM EST, 9PM CEST we will
                        launch the one and only sale of our CutePoop. Be ready
                        for the event, there will be no pre-sales.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="question">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle.question-2 block>
                      <p>What is the NFT distribution ?</p>
                      <span>+</span>
                    </b-button>
                  </b-card-header>

                  <b-collapse id="question-2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        A total of 10,000 unique CutePoop NFT will be release.
                        On this 10,000 64 will be locked (12 for the team, 20
                        for marketing and 32 for an airdrop !).
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="question">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle.question-3 block>
                      <p>Whats the price of a CutePoop ?</p>
                      <span>+</span>
                    </b-button>
                  </b-card-header>

                  <b-collapse id="question-3" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Each CutePoop is for sell at 0.04ETH (+ mint fees).
                        Don't forget that a real artist is behind these NFTs
                        (and a real dev and a real community manager :) ).
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="question">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle.question-4 block>
                      <p>Blockchain ? Token standard ?</p>
                      <span>+</span>
                    </b-button>
                  </b-card-header>

                  <b-collapse id="question-4" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        We deploy our mint contract on the Ethreum blockchain
                        each CutePoop is an ERC-721 token. You can check our
                        contract on etherscan directly.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
          <div id="Mint" class="row">
            <div class="col-12 col-md-8 col-lg-6">
              <h2>Mint Your poop</h2>
              <p>
                You have really read all on top ? So you can't pass your way.
                Mint our CutePoop and be glad to show it to the world !
              </p>
            </div>
            <div class="col-12 col-md-4 col-lg-6">
              <nuxt-link v-if="hereComeTheTime" :to="'/mint'">
                <button class="cta">Mint your own poop</button>
              </nuxt-link>
              <button v-else class="cta">
                Mint your poop {{ $config.REVEAL_DATE | displayDate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  filters: {
    displayDate(date) {
      return moment(date).fromNow()
    },
  },
  computed: {
    hereComeTheTime() {
      return moment(this.$config.REVEAL_DATE).isBefore(moment())
    },
  },
}
</script>
