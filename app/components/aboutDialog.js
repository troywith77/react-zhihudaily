import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const AboutDialog = ({
  open,
  CLOSE_ABOUT_DIALOG
}) => {
  const actions = [
    <FlatButton
      label="Get"
      primary={true}
      keyboardFocused={true}
      onTouchTap={() => CLOSE_ABOUT_DIALOG()}
    />
  ];

  return (
    <div>
      <Dialog
        title="关于作者"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={() => CLOSE_ABOUT_DIALOG()}
      >
        此页面使用开源API制作而成，如有任何侵权可联系作者删除。
        <a
          href="//www.github.com/troywith77"
          target="_blank"
        >
          Github
        </a>
        {" | "}
        <a
        href="mailto:ruitang307@gmail.com"
        >
          Send E-Mail
        </a>
      </Dialog>
    </div>
  );
}

export default AboutDialog