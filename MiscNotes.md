# Misc Notes

```
console.log(d?.getFullYear(), d?.getMonth(), d?.getDate());
console.log(d?.toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))

console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
```