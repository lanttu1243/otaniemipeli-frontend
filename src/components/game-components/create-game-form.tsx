import {useState} from "react";
import {useSocket} from "@/app/(pages)/referee/template";
import {Boards} from "@/utils/types";

export default function CreateGameForm() {
  const [name, setName] = useState<string>('');
  const [boards, setBoards] = useState<Boards>({boards: []});
  const [selectedBoard, setSelectedBoard] = useState<number>(-1);

  const handleSend = () => {

  }

  return (
    <div>
      <h2>Create Game Form</h2>
        <form>
          <input name="name"
                 required
                 placeholder="Name"
                 type="text" />
          {}
          <div className="button" onClick={handleSend}>
            Create Game
          </div>

        </form>
    </div>
  );
}
