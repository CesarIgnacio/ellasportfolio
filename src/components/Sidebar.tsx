"use client";

export default function Sidebar() {
  return (
    <>
      <ul>
        <li>
          Home page <span style={{ fontSize: "x-small" }}>*current page</span>
        </li>
        <li>Gallery page (reusable component)</li>
        <li>CV page</li>
        <li>Contact page</li>
      </ul>
    </>
  );
}
