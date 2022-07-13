import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import MainNavigationString from '../../Constants/MainNavigationString';
import Post from './../../Screens/Post/Post';
import LiveChat from './../../Screens/Live-chat/LiveChat';
import Audition from './../../Screens/Audition/Audition';
import StarShowcase from './../../Screens/Star-Showcase/Showcase';
import Learning from './../../Screens/Learning/Learning';
import Live from './../../Screens/Live/Live';
import Meetup from './../../Screens/MeetUp/Meetup';
import Qna from './../../Screens/QnA/Qna';
import Fangroup from './../../Screens/Fangroup/Fangroup';
import Greetings from './../../Screens/Greetings/Greetings';
import LearningAll from '../../Screens/Learning/LearningAll';
import Wallet from '../../Screens/Wallet/Wallet';
import PostAll from '../../Screens/Post/PostAll';
import PostApproved from '../../Screens/Post/PostApproved';
import PostPending from '../../Screens/Post/PostPending';
import PostRejected from '../../Screens/Post/PostRejected';
import PostCreate from '../../Screens/Post/PostCreate';
import AuditionAll from '../../Screens/Audition/AuditionAll';
import AuditionLiveEvents from '../../Screens/Audition/AuditionLiveEvents';
import AuditionApproved from '../../Screens/Audition/AuditionApproved';
import AuditionPending from '../../Screens/Audition/AuditionPending';
import AuditionCreate from '../../Screens/Audition/AuditionCreate';
import GreetingsAll from '../../Screens/Greetings/GreetingsAll';
import GreetingsApproved from '../../Screens/Greetings/GreetingsApproved';
import GreetingsPending from '../../Screens/Greetings/GreetingsPending';
import GreetingsCompleted from '../../Screens/Greetings/GreetingsCompleted';
import GreetingsRegistered from '../../Screens/Greetings/GreetingsRegistered';
import GreetingsForwardToUser from '../../Screens/Greetings/GreetingsForwardToUser';
import GreetingsEvaluation from '../../Screens/Greetings/GreetingsEvaluation';
import GreetingsCreate from '../../Screens/Greetings/GreetingsCreate';
import QnaAll from '../../Screens/QnA/QnaAll';
import QnaApproved from '../../Screens/QnA/QnaApproved';
import QnaPending from '../../Screens/QnA/QnaPending';
import QnaCompleted from '../../Screens/QnA/QnaCompleted';
import QnaRejected from '../../Screens/QnA/QnaRejected';
import QnaCreate from '../../Screens/QnA/QnaCreate';
import Setting from '../../Screens/Setting/Setting';
import Schedule from '../../Screens/Schedule/Schedule';
import MonthSchedule from '../../Screens/Schedule/MonthSchedule';
import Auction from '../../Screens/Star-Showcase/Auction';
import MarketPlace from '../../Screens/Star-Showcase/MarketPlace';
import PendingRequest from '../../Screens/Star-Showcase/PendingRequest';
import AuctionSoldProduct from '../../Screens/Star-Showcase/AuctionSoldProduct';
import AuctionLiveBidding from '../../Screens/Star-Showcase/AuctionLiveBidding';
import AuctionAddProduct from '../../Screens/Star-Showcase/AuctionAddProduct';
import MarketPlaceSoldProduct from '../../Screens/Star-Showcase/MarketPlaceSoldProduct';
import MarketPlaceUnsoldProduct from '../../Screens/Star-Showcase/MarketPlaceUnsoldProduct';
import MarketPlaceAddProduct from '../../Screens/Star-Showcase/MarketPlaceAddProduct';
import EditProduct from '../../Screens/Star-Showcase/EditProduct';

const StackDashbord = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <StackDashbord.Navigator
      screenOptions={{headerShown: false,}}
      initialRouteName={MainNavigationString.DASHBORD}>
      <StackDashbord.Screen
      
        name={MainNavigationString.DASHBORD}
        component={Dashboard}
      />
     

      {/*=========== //post route=============  */}
      <StackDashbord.Screen name={MainNavigationString.POST} component={Post} />
      <StackDashbord.Screen name={MainNavigationString.POSTALL} component={PostAll} />
      <StackDashbord.Screen name={MainNavigationString.POSTAPPROVED} component={PostApproved} />
      <StackDashbord.Screen name={MainNavigationString.POSTPENDING} component={PostPending} />
      <StackDashbord.Screen name={MainNavigationString.POSTREJECTED} component={PostRejected} />
      <StackDashbord.Screen name={MainNavigationString.POSTCREATE} component={PostCreate} />

      {/* ============Live chat route===========  */}
      <StackDashbord.Screen
        name={MainNavigationString.LIVECHAT}
        component={LiveChat}
      />

      {/*====================== Audition==================  */}
      <StackDashbord.Screen name={MainNavigationString.AUDITION} component={Audition} />
      <StackDashbord.Screen name={MainNavigationString.AUDITIONALL} component={AuditionAll} />
      <StackDashbord.Screen name={MainNavigationString.AUDITIONLIVEEVENT} component={AuditionLiveEvents} />
      <StackDashbord.Screen name={MainNavigationString.AUDITIONAPPROVED} component={AuditionApproved} />
      <StackDashbord.Screen name={MainNavigationString.AUDITIONPENDING} component={AuditionPending} />
      <StackDashbord.Screen name={MainNavigationString.AUDITIONCREATE} component={AuditionCreate} />

      {/*====================== Star Showcase==================  */}
      <StackDashbord.Screen name={MainNavigationString.STARSHOWCASE} component={StarShowcase} />
      <StackDashbord.Screen name={MainNavigationString.AUCTION} component={Auction} />
      <StackDashbord.Screen name={MainNavigationString.MARKETPLACE} component={MarketPlace} />
      <StackDashbord.Screen name={MainNavigationString.PENDINGREQUEST} component={PendingRequest} />
      <StackDashbord.Screen name={MainNavigationString.AUCTIONSOLDPRODUCT} component={AuctionSoldProduct} />
      <StackDashbord.Screen name={MainNavigationString.AUCTIONLIVEBIDDING} component={AuctionLiveBidding} />
      <StackDashbord.Screen name={MainNavigationString.AUCTIONADDPRODUCT} component={AuctionAddProduct} />
      <StackDashbord.Screen name={MainNavigationString.MARKETPLACESOLDPRODUCT} component={MarketPlaceSoldProduct} />
      <StackDashbord.Screen name={MainNavigationString.MARKETPLACEUNSOLDPRODUCT} component={MarketPlaceUnsoldProduct} />
      <StackDashbord.Screen name={MainNavigationString.MARKETPLACEADDPRODUCT} component={MarketPlaceAddProduct} />
      <StackDashbord.Screen name={MainNavigationString.EDITPRODUCT} component={EditProduct} />
      
      
      {/* =======================Learning =============================== */}
      <StackDashbord.Screen
        name={MainNavigationString.LEARNING}
        component={Learning}
      />
      <StackDashbord.Screen
        name={MainNavigationString.LEARNINGALL}
        component={LearningAll}
      />

      {/* =======================Live =============================== */}
      <StackDashbord.Screen name={MainNavigationString.LIVE} component={Live} />

      {/* =======================MeetUp =============================== */}
      <StackDashbord.Screen
        name={MainNavigationString.MEETUP}
        component={Meetup}
      />

      {/* =======================Greetings=============================== */}
      <StackDashbord.Screen name={MainNavigationString.GREETINGS} component={Greetings} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSALL} component={GreetingsAll} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSAPPROVED} component={GreetingsApproved} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSPENDING} component={GreetingsPending} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSCOMPLETED} component={GreetingsCompleted} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSREGISTERED} component={GreetingsRegistered} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSFORWARD} component={GreetingsForwardToUser} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSEVALUATION} component={GreetingsEvaluation} />
      <StackDashbord.Screen name={MainNavigationString.GREETINGSCREATE} component={GreetingsCreate} />


      {/* =======================QnA=============================== */}
      <StackDashbord.Screen name={MainNavigationString.QNA} component={Qna} />
      <StackDashbord.Screen name={MainNavigationString.QNAALL} component={QnaAll} />
      <StackDashbord.Screen name={MainNavigationString.QNAAPPROVED} component={QnaApproved} />
      <StackDashbord.Screen name={MainNavigationString.QNAPENDING} component={QnaPending} />
      <StackDashbord.Screen name={MainNavigationString.QNACOMPLETED} component={QnaCompleted} />
      <StackDashbord.Screen name={MainNavigationString.QNAREJECTED} component={QnaRejected} />
      <StackDashbord.Screen name={MainNavigationString.QNACREATE} component={QnaCreate} />



      {/*============== Wallet==============  */}
      <StackDashbord.Screen
        name={MainNavigationString.WALLET}
        component={Wallet}
      />


      {/*============== Setting==============  */}
      <StackDashbord.Screen  name={MainNavigationString.SETTING} component={Setting} />

      {/*============== Setting==============  */}
      <StackDashbord.Screen name={MainNavigationString.SCHEDULE}  component={Schedule} />
      <StackDashbord.Screen name={MainNavigationString.MONTHSCHEDULE}  component={MonthSchedule} />

    </StackDashbord.Navigator>

    



  );
};

export default DashboardStack;