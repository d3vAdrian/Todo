import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
    return (
     <>
     <div className="flex flex-col w-8/12 items-center gap-5 mx-auto" >
       
      <div className=" text-center text-gray-400">
      Adrian Karanja's 2023 to-do list app is a highly anticipated productivity tool. Its clean interface, customizable features, and seamless syncing across devices make it a must-have for anyone looking to stay organized and on top of their tasks. The app also includes helpful features like progress tracking and deadline reminders to ensure users never miss a deadline or forget an important task.
      </div>
      <div className="flex gap-3 mt-1">
        <h4>Adrian karanja K</h4>
          <div className="border-r-2 border-gray-400"></div>
        <h4>All rights reserved ©️ 2023</h4>
      </div>
     </div>
     </>
    )
}