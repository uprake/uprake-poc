export const TTAdditionalStyle = `
.ProseMirror > ul,
ol {
  padding: 0 1rem;
}

.ProseMirror > h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

.ProseMirror code {
  background: 'red';
  color: #616161;
}

.ProseMirror > pre {
  background: #0d0d0d;
  color: #fff;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.ProseMirror  pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}
.ProseMirror > img {
  max-width: 100%;
  height: auto;
}

.ProseMirror > blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(#0d0d0d, 0.1);
}

.ProseMirror > hr {
  border: none;
  border-top: 2px solid rgba(#0d0d0d, 0.1);
  margin: 2rem 0;
}
button.is-active{
    background : gray
}
`;
