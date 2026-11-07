function Stats() {
  return <aside className="specialty-strip" aria-label="Areas of practice">{["Digital experiences", "Creative development", "Thoughtful interfaces", "Meaningful details"].map(text => <span key={text}><b aria-hidden="true">✳</b>{text}</span>)}</aside>;
}
export default Stats;
