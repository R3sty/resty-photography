import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
   <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="cf93fe2d6f"><path d="M 7.03125 45.605469 L 367.78125 45.605469 L 367.78125 329.105469 L 7.03125 329.105469 Z M 7.03125 45.605469 " clip-rule="nonzero"/></clipPath></defs><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fill-opacity="1"/><rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fill-opacity="1"/><g clip-path="url(#cf93fe2d6f)"><path fill="#000000" d="M 367.492188 269.292969 C 367.167969 258.292969 366.792969 247.296875 366.292969 236.308594 C 365.792969 225.320312 365.164062 214.339844 364.339844 203.363281 C 364.121094 198.195312 363.675781 193.050781 363.175781 187.910156 C 362.679688 182.765625 362.132812 177.628906 361.695312 172.480469 C 361.339844 166.878906 361.171875 161.277344 361.035156 155.664062 C 360.894531 150.058594 360.792969 144.449219 360.578125 138.84375 C 360.175781 124.726562 356.679688 116.816406 350.148438 112.324219 C 343.613281 107.820312 334.039062 106.742188 321.472656 106.273438 C 317.628906 101.429688 312.636719 98.152344 307.269531 95.429688 C 301.902344 92.703125 296.167969 90.53125 290.832031 87.902344 C 287.925781 86.445312 285.109375 84.765625 282.453125 82.863281 C 279.800781 80.960938 277.320312 78.828125 275.074219 76.464844 C 271.628906 72.445312 269.300781 67.511719 266.605469 62.910156 C 263.90625 58.304688 260.851562 54.027344 255.941406 51.300781 C 251.125 47.941406 245.914062 46.554688 240.515625 46.074219 C 235.125 45.59375 229.546875 46.019531 224.003906 46.285156 C 219.183594 46.476562 214.367188 46.730469 209.550781 47.046875 C 204.734375 47.367188 199.925781 47.742188 195.128906 48.199219 C 183.9375 48.648438 176.113281 50.773438 169.5625 55.023438 C 163.011719 59.277344 157.734375 65.65625 151.621094 74.636719 C 147.609375 79.652344 143.785156 84.953125 139.648438 89.9375 C 135.511719 94.929688 131.050781 99.613281 125.765625 103.394531 C 119.75 107.445312 112.949219 109.96875 105.875 111.496094 C 98.800781 113.019531 91.457031 113.546875 84.34375 113.59375 C 89.210938 111.34375 91.757812 107.808594 92.226562 103.902344 C 92.695312 100.003906 91.09375 95.730469 87.675781 92.003906 C 85.269531 89.242188 82.1875 87.339844 78.835938 85.996094 C 75.488281 84.652344 71.859375 83.863281 68.355469 83.34375 C 56.550781 81.488281 47.625 86.320312 44.605469 93.066406 C 41.585938 99.808594 44.46875 108.46875 56.253906 114.273438 C 47.640625 114.464844 38.121094 115.863281 30.070312 119.523438 C 22.019531 123.191406 15.425781 129.121094 12.644531 138.398438 C 11.523438 142.15625 10.890625 146.015625 10.476562 149.902344 C 10.0625 153.796875 9.871094 157.722656 9.621094 161.613281 C 9.324219 169.808594 9.207031 178.011719 9.066406 186.214844 C 8.921875 194.421875 8.753906 202.617188 8.347656 210.816406 C 8.238281 216.078125 8.234375 221.34375 8.195312 226.609375 C 8.160156 231.875 8.089844 237.136719 7.855469 242.402344 C 7.492188 247.585938 7.265625 252.78125 7.246094 257.972656 C 7.230469 263.164062 7.433594 268.355469 7.9375 273.535156 C 8.515625 279.445312 9.210938 285.515625 10.550781 291.394531 C 11.890625 297.277344 13.859375 302.972656 16.96875 308.144531 C 23.171875 317.597656 34.722656 322.277344 47.285156 324.730469 C 59.84375 327.1875 73.410156 327.410156 83.640625 327.9375 C 91.835938 328.265625 100.03125 328.550781 108.234375 328.746094 C 116.4375 328.945312 124.636719 329.058594 132.839844 329.058594 C 135.195312 329.082031 137.554688 329.082031 139.90625 329.070312 C 142.261719 329.054688 144.621094 329.015625 146.972656 328.964844 C 148.308594 328.9375 149.632812 328.921875 150.96875 328.886719 C 152.300781 328.847656 153.625 328.808594 154.960938 328.742188 C 155.835938 328.859375 156.820312 328.753906 157.582031 328.355469 C 158.347656 327.960938 158.886719 327.28125 158.886719 326.257812 C 158.808594 324.582031 157.769531 324.007812 156.460938 323.820312 C 155.152344 323.632812 153.585938 323.84375 152.449219 323.730469 C 150.902344 323.730469 149.351562 323.730469 147.800781 323.730469 C 146.253906 323.730469 144.703125 323.730469 143.15625 323.742188 C 137.296875 323.722656 131.433594 323.765625 125.574219 323.789062 C 119.714844 323.8125 113.855469 323.835938 107.992188 323.785156 C 95.15625 323.269531 81.960938 323.578125 68.949219 322.734375 C 55.9375 321.886719 43.125 319.890625 31.050781 314.746094 C 27.65625 313.121094 24.726562 310.761719 22.359375 307.921875 C 19.996094 305.082031 18.199219 301.757812 17.078125 298.199219 C 13.511719 287.65625 12.183594 276.746094 11.835938 265.738281 C 11.488281 254.734375 12.113281 243.628906 12.453125 232.695312 C 12.429688 225.160156 12.585938 217.628906 12.8125 210.089844 C 13.042969 202.558594 13.34375 195.027344 13.601562 187.496094 C 13.792969 180.210938 13.796875 172.929688 14.082031 165.667969 C 14.367188 158.40625 14.933594 151.15625 16.238281 143.933594 C 17.625 135.441406 22.492188 129.578125 28.941406 125.734375 C 35.390625 121.894531 43.410156 120.066406 51.101562 119.632812 C 54.0625 119.441406 57.023438 119.222656 59.976562 118.949219 C 62.933594 118.671875 65.878906 118.332031 68.816406 117.886719 C 73.1875 118.558594 77.601562 118.972656 82.019531 119.105469 C 86.4375 119.238281 90.871094 119.097656 95.269531 118.648438 C 111.988281 117.101562 122.6875 112.628906 131.585938 105.457031 C 140.484375 98.285156 147.59375 88.414062 157.121094 76.050781 C 160.375 71.382812 164.019531 66.636719 168.332031 62.820312 C 172.648438 59 177.632812 56.109375 183.570312 55.167969 C 188.273438 54.40625 193.019531 53.964844 197.789062 53.644531 C 202.550781 53.3125 207.324219 53.089844 212.074219 52.75 C 216.78125 52.527344 221.492188 52.214844 226.210938 52 C 230.925781 51.78125 235.644531 51.65625 240.359375 51.792969 C 244.214844 52.101562 248.039062 53.304688 251.449219 55.238281 C 254.859375 57.171875 257.855469 59.824219 260.058594 63.023438 C 261.9375 66.003906 263.5 69.199219 265.230469 72.28125 C 266.953125 75.367188 268.835938 78.34375 271.339844 80.902344 C 273.507812 83.054688 275.84375 85.046875 278.304688 86.871094 C 280.769531 88.691406 283.363281 90.335938 286.058594 91.78125 C 290.71875 94.355469 295.773438 96.277344 300.660156 98.472656 C 305.546875 100.667969 310.273438 103.128906 314.273438 106.796875 C 311.539062 107.347656 308.675781 107.988281 305.984375 109.003906 C 303.296875 110.011719 300.785156 111.386719 298.746094 113.398438 C 294.984375 117.394531 294.277344 121.894531 295.640625 125.914062 C 296.996094 129.9375 300.425781 133.476562 304.929688 135.542969 C 306.753906 136.472656 308.730469 136.964844 310.746094 137.101562 C 312.757812 137.246094 314.8125 137.042969 316.777344 136.585938 C 322.289062 135.398438 325.425781 131.46875 326.640625 126.738281 C 327.851562 122.007812 327.144531 116.488281 324.964844 112.125 C 328.855469 112.480469 333.101562 112.707031 337.152344 113.488281 C 341.207031 114.273438 345.078125 115.613281 348.226562 118.1875 C 350.597656 120.382812 351.90625 123.261719 352.699219 126.359375 C 353.496094 129.457031 353.78125 132.757812 354.105469 135.792969 C 354.375 141.925781 354.441406 148.074219 354.535156 154.210938 C 354.632812 160.351562 354.757812 166.492188 355.148438 172.625 C 355.417969 176.945312 355.882812 181.253906 356.324219 185.5625 C 356.765625 189.871094 357.179688 194.179688 357.359375 198.511719 C 358.164062 210.988281 358.957031 223.480469 359.53125 235.972656 C 360.109375 248.46875 360.476562 260.972656 360.425781 273.492188 C 360.378906 275.539062 360.332031 277.578125 360.28125 279.625 C 360.230469 281.671875 360.175781 283.714844 360.113281 285.761719 C 360.046875 289.097656 359.984375 292.613281 359.320312 295.9375 C 358.660156 299.261719 357.414062 302.402344 354.980469 304.96875 C 346.90625 313.753906 332.488281 316.894531 317.292969 317.96875 C 302.09375 319.042969 286.125 318.050781 274.945312 318.582031 C 250.296875 319.175781 231.675781 322.242188 213.730469 321.121094 C 195.777344 319.996094 178.492188 314.691406 156.503906 298.53125 C 149.621094 293.160156 143.058594 287.074219 137.511719 280.238281 C 131.957031 273.398438 127.410156 265.804688 124.570312 257.421875 C 122.273438 251 120.800781 244.332031 120.042969 237.582031 C 119.289062 230.832031 119.257812 223.988281 119.828125 217.214844 C 120.304688 206.574219 122.589844 195.992188 126.480469 186.046875 C 130.371094 176.097656 135.878906 166.785156 142.78125 158.664062 C 150.824219 149.5 160.113281 143.0625 170.367188 138.742188 C 180.621094 134.417969 191.851562 132.207031 203.761719 131.496094 C 209.53125 131.160156 215.355469 130.988281 221.152344 131.269531 C 226.945312 131.550781 232.699219 132.277344 238.324219 133.742188 C 245.421875 136.003906 252.441406 138.832031 259.082031 142.335938 C 265.726562 145.839844 272 150.011719 277.621094 154.957031 C 281.542969 158.15625 284.910156 161.882812 287.746094 165.980469 C 290.574219 170.085938 292.867188 174.5625 294.636719 179.285156 C 297.363281 185.453125 299.328125 191.886719 300.757812 198.453125 C 302.183594 205.019531 303.066406 211.710938 303.632812 218.394531 C 304.183594 226.429688 304.304688 234.785156 303.050781 242.816406 C 301.800781 250.84375 299.183594 258.554688 294.265625 265.3125 C 290.78125 270.210938 286.953125 274.914062 282.753906 279.253906 C 278.5625 283.597656 274.007812 287.585938 269.070312 291.046875 C 265.746094 293.25 262.195312 295.066406 258.527344 296.605469 C 254.859375 298.140625 251.066406 299.394531 247.234375 300.46875 C 245.445312 300.972656 243.648438 301.496094 241.835938 301.910156 C 240.023438 302.324219 238.191406 302.628906 236.316406 302.714844 C 234.96875 302.960938 232.996094 302.839844 231.128906 302.882812 C 229.261719 302.921875 227.492188 303.128906 226.542969 304.007812 C 225.492188 304.992188 225.359375 306.441406 225.859375 307.632812 C 226.351562 308.824219 227.46875 309.757812 228.910156 309.710938 C 231.296875 309.621094 233.695312 309.554688 236.089844 309.417969 C 238.484375 309.285156 240.871094 309.082031 243.234375 308.726562 C 248.898438 307.742188 254.570312 306.421875 260.015625 304.515625 C 265.460938 302.613281 270.6875 300.121094 275.441406 296.800781 C 284.230469 290.171875 292.6875 282.207031 299.242188 273.066406 C 305.804688 263.925781 310.472656 253.609375 311.695312 242.28125 C 313.105469 228.304688 312.613281 213.847656 309.847656 199.898438 C 307.078125 185.953125 302.039062 172.515625 294.34375 160.578125 C 289.414062 153.925781 283.378906 148.289062 276.695312 143.492188 C 270.015625 138.699219 262.695312 134.742188 255.203125 131.4375 C 246.652344 127.195312 237.496094 124.847656 228.132812 123.765625 C 218.773438 122.6875 209.214844 122.878906 199.855469 123.703125 C 188.074219 124.480469 176.507812 127.195312 165.933594 131.972656 C 155.355469 136.742188 145.761719 143.578125 137.90625 152.585938 C 126.355469 165.945312 118.644531 182.25 114.898438 199.46875 C 111.160156 216.683594 111.378906 234.808594 115.710938 251.796875 C 118.214844 261.828125 122.714844 271.074219 128.570312 279.433594 C 134.425781 287.792969 141.628906 295.261719 149.539062 301.722656 C 156.652344 307.273438 164.3125 312.285156 172.402344 316.433594 C 180.488281 320.578125 189.003906 323.867188 197.824219 325.96875 C 207.484375 328.207031 217.289062 328.566406 227.113281 328.226562 C 236.9375 327.882812 246.796875 326.851562 256.558594 326.296875 C 264.429688 325.726562 272.300781 325.585938 280.179688 325.597656 C 288.058594 325.609375 295.933594 325.769531 303.8125 325.816406 C 312.019531 325.789062 320.472656 325.511719 328.707031 324.226562 C 336.9375 322.945312 344.949219 320.652344 352.261719 316.589844 C 357.59375 313.546875 361.417969 309.308594 363.867188 304.332031 C 366.316406 299.363281 367.378906 293.664062 367.199219 287.691406 C 367.253906 284.625 367.34375 281.558594 367.410156 278.492188 C 367.476562 275.425781 367.523438 272.359375 367.492188 269.292969 Z M 81.519531 109.394531 C 77.972656 111.109375 73.515625 111.988281 70.707031 112.539062 C 68.011719 112.125 65.304688 111.578125 62.691406 110.757812 C 60.078125 109.933594 57.5625 108.835938 55.257812 107.328125 C 51.421875 104.714844 49.289062 101.285156 49.300781 98.050781 C 49.3125 94.816406 51.464844 91.773438 56.195312 89.9375 C 60.199219 88.730469 64.511719 88.503906 68.726562 89.09375 C 72.941406 89.675781 77.054688 91.066406 80.675781 93.089844 C 82.105469 94.0625 83.4375 95.253906 84.523438 96.628906 C 85.609375 98.003906 86.457031 99.558594 86.925781 101.246094 C 87.730469 105.140625 85.082031 107.691406 81.53125 109.402344 Z M 321.566406 124.414062 C 320.949219 128.414062 318.410156 131.570312 312.921875 131.71875 C 310.105469 131.996094 306.550781 130.675781 303.992188 128.503906 C 301.433594 126.328125 299.878906 123.300781 301.054688 120.167969 C 302.046875 117.230469 305.078125 115.339844 308.550781 114.117188 C 312.019531 112.894531 315.921875 112.347656 318.648438 112.09375 C 320.871094 115.59375 322.183594 120.425781 321.574219 124.414062 Z M 321.566406 124.414062 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
  ),
}
