import { useState } from 'react';
import Content from './components/Content';
import ButtonGroup from './components/ButtonGroup';
function App() {
  // State for Content
  const [isShowContent, setIsShowContent] = useState(false);
  const [toggleContentColor, setToggleContentColor] = useState(false);

  // State for SubContent
  const [isShowSubContent, setIsShowSubContent] = useState(false);
  const [toggleSubContentColor, setToggleSubContentColor] = useState(false);

  // Handle Content
  const handleToggleShowContent = () => setIsShowContent(!isShowContent);
  const handleToggleContentColor = () => setToggleContentColor(!toggleContentColor);

  // Handle SubContent
  const handleToggleShowSubContent = () => setIsShowSubContent(!isShowSubContent);
  const handleToggleSubContentColor = () => setToggleSubContentColor(!toggleSubContentColor);

  const subContent = {
    title: 'this is title of sub-content',
    content: 'this is content of sub-content',
  };

  return (
    <div>
      <ButtonGroup
        handleToggleShowContent={handleToggleShowContent}
        handleToggleContentColor={handleToggleContentColor}
        handleToggleShowSubContent={handleToggleShowSubContent}
        handleToggleSubContentColor={handleToggleSubContentColor}
      />
      <Content
        isShowContent={isShowContent}
        toggleContentColor={toggleContentColor}
        content='this is a content, not sub-content'
        suggestion='where is the subcontent?'
        isShowSubContent={isShowSubContent}
        toggleSubContentColor={toggleSubContentColor}
        subContent={subContent}
      />
    </div>
  );
}

export default App;
