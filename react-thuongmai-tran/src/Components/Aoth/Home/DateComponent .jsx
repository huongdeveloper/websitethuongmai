import React from 'react';

const DateComponent = () => {
  const currentDate = new Date();

  const daysOfWeek = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy'
  ];

  const months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <div className="date-container">
      <p className="date-text">{`${dayOfWeek}, Ngày ${dayOfMonth}, ${month}, năm ${year}`}</p>
    </div>
  );
}

export default DateComponent;
