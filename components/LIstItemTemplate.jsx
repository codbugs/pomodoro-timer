import { LinkButton, PrimaryLinkButton } from '../components/buttons';
import { Actions, Content } from '../components/layout';

export default function ListItemTemplate({ item, onRun, onRemove }) {

    const formatDate = date => {
      const formatter = new Intl.DateTimeFormat('en-us' , {
        dateStyle: "long"
      });
  
      return formatter.format(new Date(date));
    };
  
    const getMinutes = time => {
      return Math.floor(parseInt(time) / 60);
    }
  
    return <div className="task">
      <Content>
        <div className="title">{ item.title }</div>
        <ul className="metas list">
          <li className="meta">Pomodoros: { item.pomodoros.length }</li>
          <li className="meta">Pomodoro time: { getMinutes(item.time) } minutes</li>
          <li className="meta">Time spent: { getMinutes(item.pomodoros.reduce( (acc, current) => acc + parseInt(current.time), 0)) } minutes</li>
          { item.pomodoros.length > 0 && <li className="meta">Last pomodoro ran on: { formatDate(item.pomodoros[item.pomodoros.length - 1].date) }</li> }
          <li className="meta">Created on: { formatDate(item.created) }</li>
        </ul>
      </Content>
      <Actions>
        <PrimaryLinkButton text="Pomodoro" onAction={ () => onRun(item) } />
        <LinkButton text="Remove" onAction={ () => onRemove(item) } />
      </Actions>
    </div>;
  }