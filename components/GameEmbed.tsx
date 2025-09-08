import { useEffect, useRef } from 'react';

interface GameEmbedProps {
  gamePath: string;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ gamePath }) => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    // 创建iframe元素来加载游戏
    const iframe = document.createElement('iframe');
    iframe.src = `/${gamePath}/index.html`;
    iframe.width = '100%';
    iframe.height = '600px'; // 可以根据需要调整高度
    iframe.style.border = 'none';
    iframe.title = '嵌入式游戏';

    // 清空容器并添加iframe
    gameContainerRef.current.innerHTML = '';
    gameContainerRef.current.appendChild(iframe);

    // 清理函数
    return () => {
      if (gameContainerRef.current) {
        gameContainerRef.current.innerHTML = '';
      }
    };
  }, [gamePath]);

  return (
    <div className="game-embed-container" ref={gameContainerRef}>
      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        游戏加载中...
      </div>
    </div>
  );
};

export default GameEmbed;